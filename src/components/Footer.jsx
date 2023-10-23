import React from "react";
import { Container, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <Container>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "white" }}>Contacto</h2>
          <a>Repositorio GitHub: 123-455</a>
          <a>Email: ejemplo@example.com</a>
        </Col>
      </Container>
      <div style={{ margin: "15px" }}>
        <a>2023. Luis Castro Márquez. Todos los derechos reservados.</a>
      </div>
    </footer>
  );
};

export default Footer;
