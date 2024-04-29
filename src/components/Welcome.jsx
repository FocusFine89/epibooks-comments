import { useState } from "react";
import { Alert,Button } from "react-bootstrap";

function Welcome () {
    const [show, setShow] = useState(true);
  
    return (
        <>
          <Alert show={show} variant="success">
            <Alert.Heading>EPIBOOKS</Alert.Heading>
            <p>
              Benvenuto su EpiBooks
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
    
          {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
        </>
      );
}
export default Welcome