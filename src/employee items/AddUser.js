import React, { Component } from "react";
import EmployeeMenu from "./EmployeeMenu";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function AddUser() {
  const [load, setLoad] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    fetch("http://localhost:8080/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // mode: "no-cors",
      body: JSON.stringify({
        name: name,
        surname: surname,
        password: password,
        email: email,
        phone_number: phone,
      }),
    })
      .then((res) => res.json())

      .then((userDetails) => {
        console.log(userDetails);
        // setUserDet(userDetails);
        // setLog(true);
        // setLoad(true);
      });
  };

  return (
    <div>
      <EmployeeMenu />
      <br />
      <br />
      <div className="Reg1">
        <Form>
          <div id="window5">
            {" "}
            Imię: <br /> <input id="name" />{" "}
          </div>
          <br />
          <div id="window5">
            {" "}
            Nazwisko: <br /> <input id="surname" />{" "}
          </div>
          <br />
          <div id="window5">
            {" "}
            Numer telefonu: <br />
            <input id="phone" />{" "}
          </div>

          <br />
        </Form>
      </div>
      <div className="Reg2">
        <Form>
          <div id="window5">
            {" "}
            Email:
            <br /> <input id="email" />{" "}
          </div>
          <br />
          <div id="window5">
            {" "}
            Hasło:
            <br /> <input type="password" id="pass" />{" "}
          </div>
          <br />
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
          Dodaj użytkownika
        </Button>
      </div>
    </div>
  );
}
