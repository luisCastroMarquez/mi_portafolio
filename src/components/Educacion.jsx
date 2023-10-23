import { Container, Row, Col, Image } from "react-bootstrap";
import { educacionData } from "../data"; // Importa el arreglo de datos de educación

const Educacion = () => {
  return (
    // La masa del componente Educacion comienza aquí
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
      }}
      id="educacion"
    >
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        id="col_educacion"
      >
        <Image
          className="zoom"
          style={{
            height: "305px",
            width: "320px",
            margin: "30px",
            borderRadius: "70%",
          }}
          src={educacionData.imagen}
          alt="Logo Universidad 1"
          fluid
          thumbnail
        />
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <h1>{educacionData.nombre}</h1>
          <h2> Tecnico, Analista Progamador</h2>
          <p>{educacionData.descripcion}</p>
        </Col>
      </Row>
    </Container>
    // La masa del componente Educacion termina aquí
  );
};

export default Educacion;
