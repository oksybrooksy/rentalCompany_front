import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function MyNavbar() {
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Strona główna</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>{!log && <Link to="/log">Logowanie</Link>}</Nav.Link>
            <Nav.Link>{!log && <Link to="/reg">Rejestracja</Link>}</Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/stats">Statystyki </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            {log && (
              <Nav.Link id="wyloguj" onClick={logout}>
                Wyloguj
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
