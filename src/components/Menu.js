import React, { Component, useContext } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, Container, Navbar } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import MyNavbar from "./Navbar";

export default function CategoriesMenu({ setCategory }) {
  const { user, isLogged } = useContext(UserContext);
  const [us, setUser] = user;
  const [log, setLog] = isLogged;

  const logout = (event) => {
    event.preventDefault();
    setUser(null);
    setLog(false);
    console.log("submit");
  };

  return (
    <div>
      <div id="menuDiv">
        <Menu vertical>
          <Menu.Item
            id="wybor"
            name="wszystkie"
            onClick={() => setCategory("none")}
          >
            Wszystkie kategorie
          </Menu.Item>

          <Menu.Item>
            <Menu.Menu>
              <Menu.Item
                id="wybor"
                name="dlaDzieci"
                // active={activeItem === "edukacyjne"}

                onClick={() => setCategory("dla dzieci")}
              >
                Dla dzieci
              </Menu.Item>
              <Menu.Item
                id="wybor"
                name="edukacyjne"
                // active={activeItem === "edukacyjne"}
                onClick={() => setCategory("edukacyjne")}
              >
                Edukacyjne
              </Menu.Item>
              <Menu.Item
                id="wybor"
                name="familijne"
                // active={activeItem === "familijne"}
                onClick={() => setCategory("familijne")}
              >
                Familijne
              </Menu.Item>
              <Menu.Item
                id="wybor"
                name="karciane"
                // active={activeItem === "karciane"}
                onClick={() => setCategory("karciane")}
              >
                Karciane
              </Menu.Item>
              <Menu.Item
                name="logiczne"
                id="wybor"
                // active={activeItem === "logiczne"}
                onClick={() => setCategory("logiczne")}
              >
                Logiczne
              </Menu.Item>
              <Menu.Item
                id="wybor"
                name="przygodowe"
                // active={activeItem === "przygodowe"}
                onClick={() => setCategory("przygodowe")}
              >
                Przygodowe
              </Menu.Item>

              <Menu.Item
                id="wybor"
                name="strategiczne"
                // active={activeItem === "strategiczne"}
                onClick={() => setCategory("strategiczne")}
              >
                Strategiczne
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          {log && (
            <Dropdown item text="Więcej">
              <Dropdown.Menu>
                {log && (
                  <Link to="/userAccount">
                    <Dropdown.Item
                      icon="settings"
                      id="wybor"
                      text="Twój profil"
                    />
                    //{" "}
                  </Link>
                )}
                {log && (
                  <Link to="/userRent">
                    <Dropdown.Item icon="globe" id="wybor" text="Twoje gry" />
                  </Link>
                )}
                {log && (
                  <Link to="/userArchieveRent">
                    <Dropdown.Item icon="globe" id="wybor" text="Archiwum" />
                  </Link>
                )}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu>
      </div>
    </div>
  );
}
