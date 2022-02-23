import { Container, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import "./style.css";

export default function OneGame({}) {
  const [game, setGame] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/getOneGame?id=${id}`)
      .then((res) => res.json())
      .then((result) => {
        setGame(result);
      });
  }, []);

  return (
    <div>
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
            <Button
              id="button_rezerwacja"
              variant="outline-secondary"
              block
              size="lg"
              type="submit"
            >
              Zarezerwuj {game.name}
            </Button>
          </Paper>
        </Container>
      </div>
      <br />
    </div>
  );
}
