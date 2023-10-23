import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    // La masa del componente Header comienza aquí
    <Navbar
      style={{
        display: "flex",
        flexDirection: "column",
        background: "dark",
        border: "1px solid",
        backgroundColor: "blue",
      }}
    >
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Navbar.Brand style={{ margin: "10px" }} href="#inicio">
          <h2>Mi Portafolio</h2>
        </Navbar.Brand>
        <Navbar.Collapse
          style={{ display: "flex", margin: "20px" }}
          id="navbar"
        >
          <Nav style={{ display: "flex", gap: "10px" }} className="me-auto">
            <Nav.Link href="#certificados">
              <h4>Certificados</h4>
            </Nav.Link>
            <Nav.Link href="#repositorios-github">
              <h4>Repositorios GitHub</h4>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // La masa del componente Header termina aquí
  );
};

export default Header;
