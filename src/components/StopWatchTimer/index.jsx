import React, { useState } from "react"
import { Container, Row, Col, Card, ButtonGroup, Button, Toast } from "react-bootstrap";


export const StopWatchTimer = () => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setminutes] = useState(0)
    const [hours, sethours] = useState(0)
    
    const handleStart = () =>{

        const intervalSeconds = setInterval(()=>{
            setSeconds((s)=>{
                if(s===60){
                    return 0;
                }
                return s + 1
            })
        }, 1000) 
    };

    const handleStop = () =>{
        


    }
  

    return (
      <Container>
        <Row className="mt-5" >
          <Col xs={12} lg={{span:6, offset:3 }}  className="mi text-center">
          <ButtonGroup>
            <Button>Comenzar</Button>
            <Button>Detener</Button>
            <Button>Reiniciar</Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-dark">Min</Button>
            <Button variant="outline-dark">x2</Button>
            <Button variant="outline-dark">x4</Button>
            <Button variant="outline-dark">x6</Button>
            <Button variant="outline-dark">Max</Button>
          </ButtonGroup>

          <Card style={{ width: "25rem" }} className="m-auto my-3">
            <Card.Body>
              <Card.Title>Stopwatch / Timer</Card.Title>
              <Card.Text>
                00 horas - 00 minutos - 00 segundos
              </Card.Text>
            </Card.Body>
            <Card.Footer>00:00:00</Card.Footer>
          </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  

