import React, { useState } from "react"
import { Container, Row, Col, Card, ButtonGroup, Button } from "react-bootstrap";


const oneOrTwoNum = (num) => num > 9 ? num : `0${num}`
const pluralSingular = (num) => num > 1 ? "s" : "" 
const One_Second_To_Millisecond = 1000

export const StopWatchTimer = () => {

    const timerInitialState = {seconds : 0, minutes:0, hours:0};
    const [timer, setTimer] = useState(timerInitialState);

    const [velocity, setVelocity] = useState(1);
    const [intervalState, setIntervalState] = useState(null)    
    

    const handleStart = () =>{
      if(intervalState){
        handleStop()
      }
       
      
        const interval = setInterval(()=>{
          setTimer((t) => {
            if (t.seconds === 59){
              return {...t, seconds:0, minutes: t.minutes + 1};
            }
            if (t.minutes === 59){
              return {...t, minutes:0, hours: t.hours +1};
            }
            return {...t, seconds: t.seconds + 1};
          })
        },velocity ? One_Second_To_Millisecond/velocity : One_Second_To_Millisecond
        )
    setIntervalState(interval)
  };
    
  
    const handleStop = () =>{
        if(!intervalState){
          console.log('No hay intervalo activo')
          return
        }
        clearInterval(intervalState)
    }

    const handleReset = () => {
      handleStop()
      setTimer(timerInitialState)
    }
  
    const handleVelocity = (vel) =>{
       if(intervalState){
        handleStop()
       } 
       setVelocity(vel)
    }

    return (
      <Container>
        <Row className="mt-5" >
          <Col xs={12} lg={{span:6, offset:3 }}  className="mi text-center">
          <ButtonGroup aria-label="Basic example" className="d-block my-2">
            <Button variant="outline-success" onClick={handleStart} >Comenzar</Button>
            <Button variant="outline-danger" onClick={handleStop}  >Detener</Button>
            <Button variant="outline-dark" onClick={handleReset}  >Reiniciar</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-dark" className={velocity === 1 && "active"} onClick={()=>handleVelocity(1)}>Min</Button>
            <Button variant="outline-dark" className={velocity === 2 && "active"} onClick={()=>handleVelocity(20)} >x2</Button>
            <Button variant="outline-dark" className={velocity === 4 && "active"} onClick={()=>handleVelocity(40)} >x4</Button>
            <Button variant="outline-dark" className={velocity === 6 && "active"} onClick={()=>handleVelocity(60)}>x6</Button>
            <Button variant="outline-dark" className={velocity === 10 && "active"} onClick={()=>handleVelocity(100)}>Max</Button>
          </ButtonGroup>

          <Card style={{ width: "25rem" }} className="m-auto my-3">
            <Card.Body>
              <Card.Title>Stopwatch / Timer</Card.Title>
              <Card.Text>
                {oneOrTwoNum(timer.hours)} Hora{pluralSingular(timer.hours)} - {oneOrTwoNum(timer.minutes)} Minuto{pluralSingular(timer.minutes)} - {oneOrTwoNum(timer.seconds)} Segundo{pluralSingular(timer.seconds)}
              </Card.Text>
            </Card.Body>
            <Card.Footer>{oneOrTwoNum(timer.hours)}:{oneOrTwoNum(timer.minutes)}:{oneOrTwoNum(timer.seconds)}</Card.Footer>
          </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  

