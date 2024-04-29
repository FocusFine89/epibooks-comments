// import books from "../data/horror.json"
import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class AllTheBooks extends Component {
  render() {
    const { books } = this.props;
    return (
      <Container fluid>
        <Row>
          {books.map((book) => {
            return (
              <SingleBook
                book={book}
                key={book.asin}
                title={book.title}
                price={book.price}
                image={book.img}
                asin={book.asin}
              />
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
