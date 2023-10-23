import { useState } from "react";
import { Card, Form, Image, Button } from "react-bootstrap";
import { repositoriosData } from "../data";
import { FaHtml5 } from "react-icons/fa";

const RepositoriosGitHub = () => {
  const itemsPerPage = 3; // Número de elementos por página
  const totalPages = Math.ceil(repositoriosData.length / itemsPerPage); // Total de páginas

  // Estado para controlar la página actual
  const [currentPage, setCurrentPage] = useState(1);

  // Obtiene los elementos a mostrar en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = repositoriosData.slice(startIndex, endIndex);

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "blue",
        }}
      >
        <h2 style={{ color: "white" }}> Repositorio </h2>
      </div>
      <Card.Body
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          backgroundColor: "white",
          padding: "30px",
          gap: "20PX",
        }}
      >
        {currentItems.map((repo, id) => (
          <div
            className="zoom"
            key={id}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              border: "1px solid",
              padding: "10px",
              borderRadius: "15px",
            }}
          >
            <Card.Title
              style={{
                width: "220px",
                height: "104px",
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <Image
                className="zoom"
                style={{
                  width: "182px",
                  height: "110px",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid",
                  borderRadius: "15px",
                }}
                src={repo.imagen}
                alt="html5"
                fluid
                thumbnail
              />
            </Card.Title>
            <Card.Text
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid",
                margin: "20px",
              }}
            >
              {repo.descripcion}
            </Card.Text>
            {repo.tiempo}
            <Form.Group
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "1px solid",
                margin: "10px",
              }}
            >
              <FaHtml5 />
              {repo.curso}
            </Form.Group>
          </div>
        ))}
      </Card.Body>
      {totalPages > 1 && (
        <div
          className="pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "white",
            margin: "20px",
          }}
        >
          <Button
            variant="primary"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <Button
            variant="primary"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </Button>
        </div>
      )}
    </Card>
  );
};

export default RepositoriosGitHub;
