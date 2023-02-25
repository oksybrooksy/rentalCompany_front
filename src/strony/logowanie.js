import React, { Component, useContext } from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Paper } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import MyNavbar from "../components/Navbar";

function Logowanie() {
  const { user, isLogged } = useContext(UserContext);
  const [userDer, setUserDet] = user;
  const [log, setLog] = isLogged;

  const [load, setLoad] = useState(false);
  useEffect(() => {}, [load]);

  const handleClick = (e) => {
    e.preventDefault();

    var email2 = document.getElementById("email").value;
    var haslo2 = document.getElementById("pass").value;

    fetch(`http://localhost:8080/api/myLogin?email=${email2}&haslo=${haslo2}`)
      .then((res) => res.json())
      .then((userDetails) => {
        console.log(userDetails);

        setUserDet(userDetails);
        setLog(true);
        setLoad(true);
      });
  };

  return (
    <div>
      <MyNavbar />
      <Container id="kontener">
        <Paper elevation={3} id="paperStyle">
          <Form id="logIn">
            <div id="opis2">
              Wpisz swoje dane, by zalogować się na swoje konto i wypożyczyć
              grę!
            </div>
            <br />

            <div id="window4">
              {" "}
              Email:
              <br /> <input id="email" />{" "}
            </div>
            <br />
            <div id="window4">
              {" "}
              Hasło:
              <br /> <input id="pass" type="password" />{" "}
            </div>

            <br />
            <div>
              <Button
                id="my_button"
                variant="outline-secondary"
                block
                size="lg"
                type="submit"
                onClick={handleClick}
              >
                Zaloguj się
              </Button>
            </div>
          </Form>
        </Paper>
      </Container>
    </div>
  );
}
export default Logowanie;
