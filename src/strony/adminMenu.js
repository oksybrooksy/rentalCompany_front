import { Container, Navbar } from "react-bootstrap";
import { Menu } from "semantic-ui-react";
import "./style.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AdminMenu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/admin">Witaj w panelu administracji</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <div id="adminmenu">
        <Menu vertical>
          <Menu.Item id="wybor" name="wszystkie">
            Zarządzaj kontami
          </Menu.Item>
          <Menu.Item>
            <Menu.Menu>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/addUserAdm">Dodaj użytkownika</Link>
              </Menu.Item>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/deleteUser">Usuń użytkownika</Link>
              </Menu.Item>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/addEmpl">Dodaj pracownika</Link>
              </Menu.Item>
              <Menu.Item id="wybor" name="edukacyjne">
                <Link to="/deleteEmpl">Usuń pracownika</Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
