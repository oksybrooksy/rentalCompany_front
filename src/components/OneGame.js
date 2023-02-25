import { Container, Paper } from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import "./style.css";
import { UserContext } from "../context/UserContext";
import MyNavbar from "./Navbar";

export default function OneGame({}) {
  const [game, setGame] = useState([]);
  const { id } = useParams();

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
      body: JSON.stringify({}),
    }).then((result) => {
      console.log("status:" + result.status);
      console.log(result);
      if (result.status == 200) {
        alert(
          "Gra zarezerwowana! Aby zobaczyć  swoje rezerwacje i wypożyczenia, wejdź w zakładkę 'Twoje gry'"
        );
      } else {
        alert("Niestety gra jest już wypożyczona. Spróbuj później!");
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:8080/api/getOneGame?id=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setGame(result);
      });
  }, []);

  return (
    <div>
      <MyNavbar />
      <div id="top1">
        <Container>
          <Paper
            elevation={6}
            style={{
              marginLeft: "100px",
              marginTop: "30px",
              padding: "35px",
              textAlign: "center",
              width: "80%",
              height: "100%",
              float: "left",
              position: "relative",
            }}
            key={game.id}
          >
            <img src={game.image} style={{ width: "25%", height: "24%" }} />
            <br />
            <h4> {game.name}</h4>
            <h6>Na stanie wypożyczalni: {game.amount}</h6>
            <h6>
              {" "}
              Ilość graczy: {game.min_players}-{game.max_players}
            </h6>
            <h6> Czas gry: {game.time}min+</h6>
            Opis gry: <br /> {game.description}
            <br />
            {log && (
              <Button
                id={game.id}
                // id="button_rezerwacja"
                variant="outline-secondary"
                block
                size="lg"
                type="submit"
                onClick={makeRent}
              >
                Zarezerwuj {game.name}
              </Button>
            )}
          </Paper>
        </Container>
      </div>
      <br />
    </div>
  );
}
