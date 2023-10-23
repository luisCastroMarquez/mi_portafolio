import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { certificadosData } from "../data"; // Importa el arreglo de datos de certificados

const Certificado = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = certificadosData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(certificadosData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "blue",
      }}
    >
      <h2 style={{ color: "white" }}> Certificados</h2>
      <Card.Body
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "30px",
        }}
      >
        {currentItems.map((certificado, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid",
              margin: "10px",
            }}
          >
            <Card.Title
              style={{
                display: "flex",
                alignItems: "center",
                margin: "30px",
              }}
            >
              <strong>{certificado.titulo}</strong>
            </Card.Title>
            <Card.Text
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px 10px",
              }}
            >
              <strong>{certificado.especialidad}</strong>
              {certificado.descripcion}
            </Card.Text>
          </div>
        ))}
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="primary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>{" "}
          <Button
            variant="primary"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Certificado;
