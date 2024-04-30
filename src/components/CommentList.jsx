import { Component, useEffect, useState } from "react";
import { Badge, ListGroup, ListGroupItem } from "react-bootstrap";

const CommentList = (props) => {
  const [commenti, setCommenti] = useState([]);

  const getFetch = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + props.asinBook,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZTk0MzdmMzA0NjAwMWFlNTlmNjYiLCJpYXQiOjE3MTQzOTUzOTMsImV4cCI6MTcxNTYwNDk5M30.5Qtm6lCNrJ-mRo3y9dn2rDiYHX4w9Mi92v2pvK24wzk",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCommenti(response);
      });
  };

  //   componentDidMount() {
  //     this.getFetch();
  //   }
  useEffect(() => {
    getFetch();
  }, []);
  return (
    <ListGroup>
      {commenti.map((commento) => {
        return (
          <ListGroupItem key={commento._id}>
            <p>User: {commento.comment}</p>
            <Badge bg="secondary">{commento.rate}</Badge>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default CommentList;
