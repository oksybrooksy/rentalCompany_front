import React from "react";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Paper } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import MyNavbar from "../components/Navbar";

export default function Registration() {
  //   const { user, isLogged } = useContext(UserContext);
  //   const [userDet, setUserDet] = user;
  //   const [log, setLog] = isLogged;

  const [load, setLoad] = useState(false);
  useEffect(() => {}, [load]);

  const paperStyle = {
    padding: "50px ",
    width: "80%",
    margin: "20px auto",
    height: 580,
  };

  const handleClick = (e) => {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var password = document.getElementById("pass").value;
    var password2 = document.getElementById("pass2").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (password !== password2) {
      alert("Hasła muszą być takie same!");
    } else if (!password.match(/[a-z]/) || !password.match(/[A-Z]/)) {
      alert("Hasło musi zawierać małe i duże litery! ");
    } else if (!password.match(/\d/)) {
      alert("Hasło musi zawierać minimum jedną cyfrę!");
    } else if (!password.match(/[^a-zA-Z\d]/)) {
      alert("hasło musi zawierać znak specjalny!");
    } else if (phone > 999999999) {
      alert("Za długi numer telefonu!");
    } else if (phone < 100000000) {
      alert("Za krótki numer telefonu!");
    } else {
      fetch("http://localhost:8080/api/addUser", {
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
      }).then((result) => {
        if (result.status === 400) {
          alert("Błąd podczas rejestracji! Spróbuj jeszcze raz.");
        } else {
          alert("Sukces! Możesz zalogować się na swoje konto!");
        }
      });
    }
  };

  return (
    <>
      <MyNavbar />
      <Container id="kontener_rejestracji">
        <Paper elevation={3} style={paperStyle}>
          <div id="opis2">Wypełnij formularz, by założyć nowe konto!</div>
          <br />
          <br />
          <div className="Register1">
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
          <div className="Register2">
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
              <div id="window5">
                {" "}
                Powtórz hasło:
                <br /> <input type="password" id="pass2" />{" "}
              </div>
            </Form>
          </div>

          <div id="my_button2">
            <Button
              variant="outline-secondary"
              block
              size="lg"
              type="submit"
              onClick={handleClick}
            >
              Zarejestruj się
            </Button>
          </div>
        </Paper>
      </Container>
    </>
  );
}
