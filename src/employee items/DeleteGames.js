import React from "react";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./style.css";

export default function DeleteGames({ name, category }) {
  const [games, setGames] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch(
      `http://localhost:8080/getAllGames?category=${category}&page=0&name=${name}`
    )
      .then((res) => res.json())
      .then((result) => {
        setGames(result);
        console.log("name: " + name);
        console.log("category: " + category);
      });
  }, [load, name, category]);

  const handleClick = (e) => {
    setLoad(true);
    e.preventDefault();
    fetch("http://localhost:8080/deleteGame", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: e.target.id,
      }),
    }).then(() => {
      console.log("game deleted");
      setLoad(false);
    });
  };

  var index = 1;
  return (
    <div>
      <div id="main">
        <table>
          <tr id="mainTable">
            <td id="first"> Lp.</td>
            <td> Nazwa</td>
            <td>Ilość na stanie </td>
            <td></td>
          </tr>
          {games.map((game) => (
            <tr>
              <td id="first">{index++}</td>
              <td>{game.name} </td>
              <td>{game.amount} </td>

              <td>
                <Button
                  id={game.id}
                  key={game.id}
                  variant="outline-secondary"
                  block
                  size="lg"
                  type="submit"
                  onClick={handleClick}
                >
                  Usuń grę
                </Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
