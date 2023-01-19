import { useState } from "react";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import { useShow } from "../../hook/useShow";


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
              <strong className="me-auto">React - Bootstrap</strong>
              <small>Primer Clase</small>
            </Toast.Header>
            <Toast.Body>
              Curso React
            </Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Container>
  );
};
