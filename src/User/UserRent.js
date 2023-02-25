import { UserContext } from "../context/UserContext";
import React, { useEffect, useState, useContext } from "react";
import CategoriesMenu from "../components/Menu";
import { Button } from "semantic-ui-react";
import "./style.css";
import MyNavbar from "../components/Navbar";

export default function UserRent() {
  const { user, isLogged } = useContext(UserContext);
  const [log, setLog] = isLogged;
  const [userDetails, setUser] = user;

  const [rents, setRent] = useState([]);
  const [games, setGames] = useState([]);
  const [statuses, setStatus] = useState([]);
  const [load, setLoad] = useState(false);
  const [archieveRents, setArchieveRent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getUserRent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: userDetails.id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setRent(result);
        console.log(result);
      });

    fetch("http://localhost:8080/api/getOnlyGames")
      .then((res) => res.json())
      .then((result) => {
        setGames(result);
      });
    fetch("http://localhost:8080/getAll")
      .then((res) => res.json())
      .then((result) => {
        setStatus(result);
      });
  }, [load]);

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleClick2 = (e) => {
    setLoad(true);
    e.preventDefault();
    fetch("http://localhost:8080/userCancelRent", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.id,
      }),
    }).then((result) => {
      if (result.status === 200) {
        alert("Wypożyczenie anulowane.");
      } else {
        alert("Tego wypożyczenia nie można anulować");
      }
      console.log("rent cancelled");
      setLoad(false);
    });
  };

  return (
    <div>
      <MyNavbar />
      <div id="categories">
        <div id="glowny_widok">
          <br />
          <div id="twoje"> Twoje wypożyczenia: </div>
          <div id="uwaga">
            {" "}
            <br />
            *UWAGA* Możesz anulować wypożyczenie tylko wtedy, gdy nie zostało
            jeszcze zatwierdzone przez administratora{" "}
          </div>

          <div id="acceptRent">
            {rents.map((rent) => (
              <div id="acceptWindow">
                {games
                  .filter((game) => {
                    if (game.id === rent.game_id) {
                      return game;
                    }
                  })
                  .map((val, key) => {
                    return <h4> Gra: {val.name} </h4>;
                  })}
                <br />
                Data wypożyczenia: {rent.rental_date} <br />
                <br />
                Termin zwrotu: {rent.return_date}
                <br />
                <br />
                {statuses
                  .filter((status) => {
                    if (status.id === rent.status_id) {
                      return status;
                    }
                  })
                  .map((val, key) => {
                    return <div> Status: {val.status} </div>;
                  })}
                <br />
                <div id="idbutton2">
                  {rent.status_id === 1 && (
                    <Button
                      id={rent.id}
                      key={rent.id}
                      variant="outline-secondary"
                      block
                      size="lg"
                      type="submit"
                      onClick={handleClick2}
                    >
                      Anuluj
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <br />

          <br />

          <br />
        </div>
      </div>
    </div>
  );
}
