import React, { useState } from "react"
import { Container, Row, Col, Card, ButtonGroup, Button, Toast } from "react-bootstrap";


export const StopWatchTimer = () => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    const [stateIntervalSeconds, setIntervalSeconds] = useState (null)
    const [stateIntervalMinutes, setIntervalMinutes] = useState (null)
    const [stateIntervalHours, setIntervalHours] = useState (null)
    
    
    const handleStart = () =>{

        const intervalSeconds = setInterval(()=>{
            setSeconds((s)=>{
                if(s==59){
                    return 0;
                }
                return s + 1
            })
        }, 1000);
        
        const intervalMinutes = setInterval(()=>{
          setMinutes((m) => {
            if (m==59){
              return 0
            }
            return m + 1
          })
        },59999)
   

    const intervalHours = setInterval (()=>{
      setHours ((h) =>{
        return h+1
      })
    }, 3599999)

    setIntervalSeconds(intervalSeconds)
    setIntervalMinutes(intervalMinutes)
    setIntervalHours(intervalHours)
    
  };
    const handleStop = () =>{
        


    }
  

    return (
      <Container>
        <Row className="mt-5" >
          <Col xs={12} lg={{span:6, offset:3 }}  className="mi text-center">
          <ButtonGroup>
            <Button variant="outline-success" onClick={handleStart} >Comenzar</Button>
            <Button variant="outline-danger" className="mx-2" >Detener</Button>
            <Button variant="outline-dark" >Reiniciar</Button>
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
                {hours} - {minutes} - {seconds} segundos
              </Card.Text>
            </Card.Body>
            <Card.Footer>{hours}:{minutes}:{seconds}</Card.Footer>
          </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  

