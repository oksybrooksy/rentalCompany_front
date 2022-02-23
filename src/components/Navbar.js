import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Strona główna</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/log">Logowanie</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/reg">Rejestracja</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/stats">Statystyki </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default MyNavbar;
