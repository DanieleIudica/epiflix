import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";

export default function MovieDetails(props) {
  const params = useParams();

  console.log("params", params);

  const [movie, setMovie] = useState(null);
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);

  useEffect(() => {
    const funzione = async () => {
      try {
        let response = await fetch("http://www.omdbapi.com/?apikey=3bcbf89e&i=" + params.id);
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setMovie(data);
        }
      } catch (e) {}
    };
    funzione();
  }, []);

  return (
    <Row className="justify-content-center my-5">
      <Col className="text-center" xs={12} md={6}>
        {movie ? (
          <Card style={{ width: "18rem" }} className="mx-auto">
            <Card.Img variant="top" src={movie.Poster} />
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Plot}</Card.Text>
            </Card.Body>
          </Card>
        ) : typeof movie === "undefined" ? (
          <Alert variant="danger">Movie non trovato</Alert>
        ) : (
          <Spinner animation="border" variant="success" />
        )}
      </Col>
    </Row>
  );
}
