import { useEffect } from "react";
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import './style.css';


export const ShowHideMessage = () => {

    



  return (
    <Container>
      <Row>
        <Col xs={12} md={{span:6, offset:3 }}  className="mi text-center">
          <Button  className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button>
          <Toast >
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
