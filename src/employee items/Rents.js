import React from "react";
import EmployeeMenu from "./EmployeeMenu";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export default function Rents() {
  const [rents, setRents] = useState([]);
  const [load, setLoad] = useState(false);
  const [games, setGames] = useState([]);
  const [users, setUsers] = useState([]);
  const [statuses, setStatus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllRents")
      .then((res) => res.json())
      .then((result) => {
        setRents(result);
      });
    fetch("http://localhost:8080/getAllUsers")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
    fetch("http://localhost:8080/getOnlyGames")
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
    setLoad(true);
    e.preventDefault();
    fetch("http://localhost:8080/acceptRent", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.id,
      }),
    }).then(() => {
      console.log("rent accepted");
      setLoad(false);
    });
  };

  const handleClick2 = (e) => {
    setLoad(true);
    e.preventDefault();
    fetch("http://localhost:8080/cancelRent", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.id,
      }),
    }).then(() => {
      console.log("rent cancelled");
      setLoad(false);
    });
  };

  const handleClick3 = (e) => {
    setLoad(true);
    e.preventDefault();
    fetch("http://localhost:8080/deleteRent", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.id,
      }),
    }).then(() => {
      console.log("rent cancelled");
      setLoad(false);
    });
  };

  return (
    <div>
      {" "}
      <EmployeeMenu />{" "}
      <div id="acceptRent">
        {rents.map((rent) => (
          <div id="acceptWindow3">
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
            {users
              .filter((user) => {
                if (user.id === rent.user_id) {
                  return user;
                }
              })
              .map((val, key) => {
                return (
                  <div>
                    <h5>
                      {" "}
                      Użytkownik: {val.name} {val.surname}{" "}
                    </h5>
                    <br />
                    Email: {val.email}
                  </div>
                );
              })}
            <br />
            Termin wypożyczenia: {rent.rental_date} <br />
            <br />
            Termin zwrotu: {rent.return_date} <br />
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
            <div id="idbutton">
              <Button
                id={rent.id}
                key={rent.id}
                variant="outline-secondary"
                size="lg"
                type="submit"
                onClick={handleClick}
              >
                Zatwierdź
              </Button>
            </div>
            <br />
            <div id="idbutton2">
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
              <br />
            </div>
            <br />
            <div id="idbutton2">
              <Button
                id={rent.id}
                key={rent.id}
                variant="outline-secondary"
                block
                size="lg"
                type="submit"
                onClick={handleClick3}
              >
                Usuń
              </Button>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
