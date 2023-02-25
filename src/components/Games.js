// import { Container } from "react-bootstrap";
import { Container, Paper } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import MyNavbar from "./Navbar";

export default function Games({ category, name }) {
  const [games, setGames] = useState([]);
  const [mess, setMess] = useState(false);

  const navigate = useNavigate();

  const handleClick = (game) => {
    navigate(`/game/${game.id}`, { game: game });
  };

  const { user, isLogged } = useContext(UserContext);
  const [us, setUser] = user;
  const [log, setLog] = isLogged;
  const [userDet, setUserDet] = user;

  const makeRent = (e) => {
    e.preventDefault();
    var graId2 = e.target.id;
    var email2 = userDet.email;

    fetch(`http://localhost:8080/newRent?email=${email2}&graId=${graId2}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // mode= "no-cors",
      body: JSON.stringify({}),
    })
      // .then((res) => res.json())
      .then((result) => {
        console.log("status:" + result.status);
        console.log(result);
        if (result.status == 200) {
          alert(
            "Gra zarezerwowana! Aby zobaczyć  swoje rezerwacje i wypożyczenia, wejdź w zakładkę 'Twoje gry'"
          );
        } else {
          alert("Wykorzystales/as limit wypozyczanych gier!");
        }
      });
  };

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/getAllGames?category=${category}&page=0&name=${name}`
    )
      .then((res) => res.json())
      .then((result) => {
        setGames(result);
        console.log("kategoria: " + category);
        console.log("szukanie: " + name);
        console.log(result.length);
        console.log(mess);
        if (result.length === 0) setMess(true);
        if (result.length !== 0) setMess(false);
      });
  }, [category, name]);

  return (
    <Container>
      {mess && (
        <div id="mess">
          {" "}
          <h5>
            {" "}
            Niestety nie mamy aktualnie na stanie gier spełniających podane
            kryteria
          </h5>{" "}
        </div>
      )}
      {games.map((game) => (
        <Paper
          elevation={6}
          style={{
            marginLeft: "30px",
            marginTop: "30px",
            padding: "15px",
            textAlign: "center",
            width: "26%",
            height: "380px",
            float: "left",

            position: "relative",
          }}
          key={game.id}
        >
          <img
            src={game.image}
            style={{ width: "53%", height: "44%", marginTop: "25px" }}
          />
          <br />
          <h4> {game.name}</h4>

          <h6>
            {" "}
            Ilość graczy: {game.min_players}-{game.max_players}
          </h6>
          <h6> Czas gry: {game.time}min+</h6>
          <br />

          {log && (
            <Button
              // id="button_rezerwacja"
              id={game.id}
              variant="outline-secondary"
              block
              size="lg"
              type="submit"
              onClick={makeRent}
            >
              Zarezerwuj
            </Button>
          )}

          <Button
            id="button_rezerwacja"
            variant="outline-secondary"
            block
            size="lg"
            type="submit"
            onClick={() => handleClick(game)}
          >
            Zobacz więcej
          </Button>
        </Paper>
      ))}
    </Container>
  );
}
