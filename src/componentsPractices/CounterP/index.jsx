import { useState } from "react";
import { Container, Row, Col, ButtonGroup, Button } from "react-bootstrap"
import style from './styles.module.css'


import Swal from "sweetalert2";






export const Counter = () => {
  
    const [counter, setCounter] = useState(0);
    
    const add = () => {
      setCounter(counter + 1 )
    }

    const reset = () => {
      Swal.fire({
        title: 'Desea reiniciar?',
        text: "No podra revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Reiniciar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Contador reiniciado!',
            'Satisfactoriamente'
          )
          setCounter(0) 
        }
        
      })
      
    }
    const subtract = () => {
      setCounter(counter - 1)
    }



    return (
        <Container className={style.BodyContainer} >
          <Row xs={6} className={style.rowPrimary}>
            <h1 className={style.titulo} >PRACTICA CREATE COUNTER</h1>
          </Row>
          <Row className="mt-5">
            <Col xs={6} 
                 md={{span:5, offset:1 }}  
                 className="text-center mt-5 "
            >
              <div className={style.container} >
                  <h1 className={style.textCounter} > {counter}</h1>
              </div>
              <ButtonGroup aria-label="Basic example" >
                <Button variant="success" onClick={add}  >Aumenar</Button>
                <Button variant="danger" className="mx-5" onClick={() => reset()} disabled={counter ? false : true} >Reiniciar</Button>
                <Button variant="primary" onClick={subtract} >Disminuir</Button>
              </ButtonGroup>
            </Col>
            <Col xs={5} 
                 md={{span:4, offset:1 }}  
                 className= {` text-center m-4 ${style.boxInfo}`}
            > 
              <div className="boxInfo_1">
                <h4 className={style.tituloExplicativo} >Consigna:</h4>
                <p className={style.parrafo} >Implementación de un botón para sumar, un botón para reiniciar y un botón para restar
                 valores de un contador numerico decimal.</p>
                <hr />
                <h4 className={style.tituloExplicativo} >Usaremos:</h4>
                <ul>
                <li>Hook useState</li>
                <hr />
                <li>React - Bootstrap</li>
                <hr />
                <li>React Router DOM</li>                
                <hr />
                <li>CSS Module</li>
                <hr />
                <li>Sweetalert2</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      );
}