import { Component, useState } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // };

  const [selected, setSelected] = useState(false);
  return (
    <Col>
      <Card className="overflow-y-auto " onClick={() => setSelected(!selected)}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Price: <Badge bg="success">{props.price}</Badge>
          </Card.Text>
          <Card.Text>Asin Code: {props.asin}</Card.Text>

          <Button variant="dark" href="https://puginarug.com/">
            {" "}
            Scopri di più
          </Button>
          {selected && <CommentArea asinBook={props.asin} />}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
