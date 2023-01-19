import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import { useShow } from "../../hook/useShow";


export const ShowHideMessage = () => {

  const {show,handleShowMessage} = useShow(false);
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} 
             md={{span:6, offset:3 }}  
             className="text-center"
        >
          <Button  
             className="mb-2"
             variant = {show ? "danger" : "success"}
             onClick = {handleShowMessage}
          >
             <strong>{show ? "Ocultar" : "Mostrar"}</strong> mensaje
          </Button>
          <Toast show = {show} onClose={handleShowMessage} className="m-auto">
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
