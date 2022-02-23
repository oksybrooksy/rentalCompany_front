import React from "react";
import EmployeeMenu from "./EmployeeMenu";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function AddGame() {
  const [load, setLoad] = useState(false);

  const handleClick = (e) => {
    setLoad(true);
    e.preventDefault();

    var name = document.getElementById("name").value;
    var min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    var url = document.getElementById("url").value;
    var time = document.getElementById("time").value;
    var description = document.getElementById("description").value;
    var amount = document.getElementById("amount").value;
    var idproducent = document.getElementById("idproducer").value;

    fetch("http://localhost:8080/addGame", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        image: url,
        description: description,
        min_players: min,
        max_players: max,
        time: time,
        producent_id: idproducent,
        amount: amount,
        producer_id: idproducent,
      }),
    }).then(() => {
      console.log("New user added");
      setLoad(false);
    });
  };

  return (
    <div>
      <EmployeeMenu />
      <div className="Reg1">
        <Form>
          <div id="window5">
            {" "}
            Nazwa: <br /> <input id="name" />{" "}
          </div>
          <div id="window5">
            {" "}
            Czas gry: <br /> <input id="time" />{" "}
          </div>

          <div id="window5">
            {" "}
            Opis: <br />
            <input id="description" />{" "}
          </div>
          <div id="window5">
            {" "}
            Zdjęcie (link): <br />
            <input id="url" />{" "}
          </div>
        </Form>
      </div>
      <div className="Reg2">
        <Form>
          <div id="window5">
            {" "}
            Minimalna ilość graczy: <br />
            <input id="min" />{" "}
          </div>
          <div id="window5">
            {" "}
            Maksymalna ilość graczy: <br />
            <input id="max" />{" "}
          </div>
          <div id="window5">
            {" "}
            Ilość gier na stanie: <br />
            <input id="amount" />{" "}
          </div>
          <div id="window5">
            {" "}
            Id producenta: <br />
            <input id="idproducer" />{" "}
          </div>
        </Form>
      </div>
      <div id="my_button3">
        <Button
          variant="outline-secondary"
          block
          size="lg"
          type="submit"
          onClick={handleClick}
        >
          Dodaj grę
        </Button>
      </div>
    </div>
  );
}
