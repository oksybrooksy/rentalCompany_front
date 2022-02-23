import { Container, Navbar } from "react-bootstrap";
import { Menu } from "semantic-ui-react";
import React from "react";
import { Link } from "react-router-dom";

export default function EmployeeMenu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/emp">Witaj w panelu pracownika</Link>
          </Navbar.Brand>
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
                <Link to="/rents">Zarządzaj</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
