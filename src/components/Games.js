// import { Container } from "react-bootstrap";
import { Container, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Games({ category, name }) {
  const [games, setGames] = useState([]);
  const [mess, setMess] = useState(false);

  const navigate = useNavigate();

  const handleClick = (game) => {
    navigate(`/game/${game.id}`, { game: game });
  };

  useEffect(() => {
    fetch(
      `http://localhost:8080/getAllGames?category=${category}&page=0&name=${name}`
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
      {/* ilosc znalezionych gier: {games.length} */}
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
          <Button
            id="button_rezerwacja"
            variant="outline-secondary"
            block
            size="lg"
            type="submit"
          >
            Zarezerwuj
          </Button>
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
