import { Card } from "react-bootstrap";
import { formacionData } from "../data"; // Importa el arreglo de datos de formación académica

const FormacionAcademica = () => {
  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <h2 style={{ color: "white" }}> Formación Académica </h2>
      <Card.Body
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "30px",
        }}
      >
        {formacionData.map((data, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              margin: "10px",
            }}
          >
            <Card.Title
              style={{
                display: "flex",
                margin: "30px",
              }}
            >
              <strong>{data.titulo}</strong>
            </Card.Title>
            <Card.Text
              style={{
                display: "flex",
                margin: "10px",
                flexDirection: "column",
                alignItems: "center",
                gap: "30px",
              }}
            >
              <strong>{data.certificado}</strong>
              {data.descripcion}
            </Card.Text>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default FormacionAcademica;
