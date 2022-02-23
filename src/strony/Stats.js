import React from "react";
import "./style.css";
import { Paper } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";

export default function Stats() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/findBestGames`)
      .then((res) => res.json())
      .then((result) => {
        setGames(result);
      });
  }, []);
  var index = 1;
  return (
    <div id="stats">
      <Paper
        elevation={8}
        style={{
          marginLeft: "31%",
          marginTop: "20px",
          padding: "15px",
          textAlign: "center",
          width: "35%",
          height: "60px",
          fontSize: "25px",
        }}
      >
        Najczęściej wypożyczane gry TOP 3
      </Paper>
      {games.map((game) => (
        <Paper
          elevation={4}
          style={{
            marginLeft: "30px",
            marginTop: "30px",
            padding: "15px",
            textAlign: "center",
            width: "30%",
            height: "720px",
            float: "left",
          }}
          key={game.id}
        >
          <h4>Wypożyczona {game.rent_amount} razy!</h4>
          <img src={game.image} style={{ width: "63%", height: "44%" }} />
          <h3>
            {" "}
            # {index++} <br />
            {game.name}
          </h3>
          <br />
          {game.description}
        </Paper>
      ))}{" "}
    </div>
  );
}
