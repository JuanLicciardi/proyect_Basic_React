import { useState } from "react";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import './style.css';


export const ShowHideMessage = () => {

  const [show, setShow] = useState(false);
  const handleShowMessage = () => setShow(!show)



  return (
    <Container>
      <Row className="mt-5" >
        <Col xs={12} lg={{span:6, offset:3 }}  className="mi text-center">
          <Button  className="mb-2" onClick={handleShowMessage}>
            {show ? 'Ocultar' :'Mostrar'} Mensaje 
          </Button>
          <Toast show={show} onClose={handleShowMessage} className="m-auto">
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs="12"  className="mt-5 bg-primary text-center text-white" >
            <div className="mi">
                hola algo pasa
            </div>
        </Col>
      </Row>
    </Container>
  );
};
