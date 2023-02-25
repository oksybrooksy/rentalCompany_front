import { Container, Navbar, Nav } from "react-bootstrap";
import { Menu } from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function EmployeeMenu() {
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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/emp">Witaj w panelu pracownika</Link>
          </Navbar.Brand>
          <Nav>
            {log && (
              <Nav.Link id="wyloguj" onClick={logout}>
                Wyloguj
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
      <div id="adminmenu">
        <Menu vertical>
          <Menu.Item id="wybor" name="wszystkie">
            Użytkownicy
          </Menu.Item>
          <Menu.Item>
            <Menu.Menu>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/addUser">Dodaj użytkownika</Link>
              </Menu.Item>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/deleteUserEmp">Usuń użytkownika</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item id="wybor" name="wszystkie">
            Gry
          </Menu.Item>
          <Menu.Item>
            <Menu.Menu>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/addGame">Dodaj grę</Link>
              </Menu.Item>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/deleteGameEmp">Usuń grę</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item id="wybor" name="wszystkie">
            Wypożyczenia
          </Menu.Item>
          <Menu.Item>
            <Menu.Menu>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/rentsToAccept">Oczekujące</Link>
              </Menu.Item>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/rentsRented">Wypożyczone</Link>
              </Menu.Item>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/archieveRents">Archiwum</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
