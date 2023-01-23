import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import { useShow } from "../../hook/useShow";
import style from './styles.module.css'


export const ShowHideMessage = () => {

  const {show,handleShowMessage} = useShow(false);
  return (
    <Container className={style.BodyContainer} >
      <Row xs={6} className={style.rowPrimary}>
        <h1 className={style.titulo} >PRACTICA SHOW / HIDE MESSAGE</h1>
      </Row>
      <Row className="mt-5 ">
        <Col xs={6} 
             md={{span:5, offset:1 }}  
             className="text-center "
        >
          <Button  
             className="mb-2 mt-5"
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
              <small>{`Valor de Show : ${show}`}</small>
            </Toast.Header>
            <Toast.Body>
              Curso React
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={5} 
             md={{span:4, offset:1 }}  
             className={`text-center m-4 ${style.boxInfo}`}
        > 
          <div className="boxInfo_1">
            <h4 className="tituloExplicativo"  >Consigna:</h4>
            <p className="parrafo" >Implementación de un botón para mostrar/ocultar un mensaje.</p>
            <hr />
            <h4 className="tituloExplicativo" >Usaremos:</h4>
            <ul>
            <li>Hook useState</li>
            <hr />
            <li>React - Bootstrap</li>
            <hr />
            <li>React Router DOM</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
