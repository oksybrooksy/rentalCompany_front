import React, { Component, useState } from "react";
import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import CategoriesMenu from "../components/Menu";
import "./style.css";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import MyNavbar from "../components/Navbar";

function UserAccount() {
  const { user, isLogged } = useContext(UserContext);
  const [log, setLog] = isLogged;
  const [userDetails, setUser] = user;
  const [load, setLoad] = useState(false);

  useEffect(() => {}, [load]);

  const editMail = (e) => {
    e.preventDefault();
    setLoad(false);
    var email = document.getElementById("newemail").value;
    var id = userDetails.id;
    // `http://localhost:8080/user/login?email=${email2}&haslo=${haslo2}`
    fetch(`http://localhost:8080/user/editMail?newEmail=${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      // mode: "no-cors",
      body: JSON.stringify({
        id: id,
      }),
    }).then((result) => {
      console.log(result);
      setLoad(true);
      alert("Mail zmieniony poprawnie! Zaloguj się za pomocą nowych danych");
    });
  };

  return (
    <div>
      <MyNavbar />
      {/* <UserContextProvider> */}

      <div id="categories">
        <CategoriesMenu />
        <div id="glowny_widok">
          <br></br>
          <div id="window">
            <div id="window2"> Imię: </div>{" "}
            <div id="window3"> {userDetails.name} </div>{" "}
          </div>
          <div id="window">
            <div id="window2"> Nazwisko: </div>{" "}
            <div id="window3"> {userDetails.surname} </div>{" "}
          </div>
          <div id="window">
            <div id="window2"> Email: </div>{" "}
            <div id="window3"> {userDetails.email} </div>{" "}
          </div>
          <div id="window">
            <div id="window2"> Nr telefonu: </div>{" "}
            <div id="window3"> {userDetails.phone_number} </div>{" "}
          </div>
          <div id="window">
            <div id="window2"> Łączna ilość wypożyczonych pozycji: </div>{" "}
            <div id="window3"> 4 </div>{" "}
          </div>
          <div id="edit">
            {" "}
            Tu możesz zmienić swój adres e-mail: <br /> <br />{" "}
            <input id="newemail" />{" "}
          </div>
          <Button id="editButton" onClick={editMail}>
            Zmień e-mail
          </Button>
          <br />
        </div>
      </div>
      {/* </UserContextProvider> */}
    </div>
  );
  // }
}
export default UserAccount;
