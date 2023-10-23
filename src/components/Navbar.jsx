import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Mi Aplicación
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/header">
            Header
          </Nav.Link>
          <Nav.Link as={Link} to="/educacion">
            Educación
          </Nav.Link>
          <Nav.Link as={Link} to="/certificado">
            Certificado
          </Nav.Link>
          <Nav.Link as={Link} to="/repositorios">
            Repositorios GitHub
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
