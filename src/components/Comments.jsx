import { Component } from "react";
import { Col } from "react-bootstrap";

class Comments extends Component {
  state = {
    commenti: [],
  };
  getFetch() {
    fetch("https://striveschool-api.herokuapp.com/api/comments/0345546792", {
      headers: {
        // "Content-type": "apllication/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZTk0MzdmMzA0NjAwMWFlNTlmNjYiLCJpYXQiOjE3MTQzOTUzOTMsImV4cCI6MTcxNTYwNDk5M30.5Qtm6lCNrJ-mRo3y9dn2rDiYHX4w9Mi92v2pvK24wzk",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        this.setState({ commenti: response });
      });
  }
  componentDidMount() {
    this.getFetch();
  }

  render() {
    return (
      <Col>
        <h2>Commenti:</h2>
        {this.state.commenti.map((comment) => {
          return <p>User: {comment.comment}</p>;
        })}
      </Col>
    );
  }
}

export default Comments;
