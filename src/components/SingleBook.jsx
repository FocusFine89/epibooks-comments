import { Component } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    idCard: "",
  };
  getId(idCard) {
    this.setState(idCard);
  }
  render() {
    return (
      <Col>
        <Card>
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Price: <Badge bg="success">{this.props.price}</Badge>
            </Card.Text>
            <Card.Text>Asin Code: {this.props.asin}</Card.Text>

            <Button variant="dark" href="https://puginarug.com/">
              {" "}
              Scopri di più
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
