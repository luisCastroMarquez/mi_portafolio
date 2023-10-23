import { Container, Row, Col, Image } from "react-bootstrap";

const Experiencia = () => {
  return (
    // La masa del componente Experiencia comienza aquí
    <Container id="experiencia" className="py-5">
      <h1>Experiencia</h1>
      <Row className="py-4">
        <Col md={4}>
          <Image
            src="./assets/img/logo-empresa-1.jpg"
            alt="Logo Empresa 1"
            fluid
            thumbnail
          />
        </Col>
        <Col md={8}>
          <h3>Cargo, Empresa 1</h3>
          <p>Fecha de inicio - Fecha de fin</p>
          <p>Descripción de tu rol y responsabilidades</p>
        </Col>
      </Row>
      <Row className="py-4">
        <Col md={4}>
          <Image
            src="./assets/img/logo-empresa-2.jpg"
            alt="Logo Empresa 2"
            fluid
            thumbnail
          />
        </Col>
        <Col md={8}>
          <h3>Cargo, Empresa 2</h3>
          <p>Fecha de inicio - Fecha de fin</p>
          <p>Descripción de tu rol y responsabilidades</p>
        </Col>
      </Row>
    </Container>
    // La masa del componente Experiencia termina aquí
  );
};

export default Experiencia;
