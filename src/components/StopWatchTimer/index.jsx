import React, { useState } from "react"
import { Container, Row, Col, Card, ButtonGroup, Button } from "react-bootstrap";


const oneOrTwoNum = (num) => num > 9 ? num : `0${num}`
const pluralSingular = (num) => num > 1 ? "s" : "" 

export const StopWatchTimer = () => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    const [stateIntervalSeconds, setIntervalSeconds] = useState (null)
    const [stateIntervalMinutes, setIntervalMinutes] = useState (null)
    const [stateIntervalHours, setIntervalHours] = useState (null)

    const [velocity, setVelocity] = useState(1)
    
    
    const handleStart = () =>{

       
        const intervalMinutes = setInterval(()=>{
          setMinutes((m) => {
            if (m===59){
              return 0
            }
            return m + 1
          })
        },60000/velocity)
   

    const intervalHours = setInterval (()=>{
      setHours ((h) =>{
        return h+1
      })
    }, 3599999/velocity)

    const intervalSeconds = setInterval(()=>{
      setSeconds((s)=>{
          if(s===59){
              return 0;
          }
          return s + 1
      })
  }, 1000/velocity);

    setIntervalSeconds(intervalSeconds)
    setIntervalMinutes(intervalMinutes)
    setIntervalHours(intervalHours)
    
  };
    
  
    const handleStop = () =>{
        if (stateIntervalSeconds && stateIntervalMinutes && stateIntervalHours){
          clearInterval(stateIntervalSeconds)
          clearInterval(stateIntervalMinutes)
          clearInterval(stateIntervalHours)
        }
        setIntervalSeconds(null)
        setIntervalMinutes(null)
        setIntervalHours(null)

    }

    const handleReset = () => {
      handleStop()
      setSeconds(0)
      setMinutes(0)
      setHours(0)
    }
  
    const handleVelocity = (vel) =>{
       handleStop()
       setVelocity(vel)
      
    }

    return (
      <Container>
        <Row className="mt-5" >
          <Col xs={12} lg={{span:6, offset:3 }}  className="mi text-center">
          <ButtonGroup aria-label="Basic example" className="d-block my-2">
            <Button variant="outline-success" onClick={handleStart} disabled={stateIntervalSeconds && stateIntervalMinutes && stateIntervalHours} >Comenzar</Button>
            <Button variant="outline-danger" onClick={handleStop}  >Detener</Button>
            <Button variant="outline-dark" onClick={handleReset}  >Reiniciar</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-dark" className={velocity === 1 && "active"} onClick={()=>handleVelocity(1)}>Min</Button>
            <Button variant="outline-dark" className={velocity === 2 && "active"} onClick={()=>handleVelocity(2)} >x2</Button>
            <Button variant="outline-dark" className={velocity === 4 && "active"} onClick={()=>handleVelocity(4)} >x4</Button>
            <Button variant="outline-dark" className={velocity === 6 && "active"} onClick={()=>handleVelocity(6)}>x6</Button>
            <Button variant="outline-dark" className={velocity === 10 && "active"} onClick={()=>handleVelocity(10)}>Max</Button>
          </ButtonGroup>

          <Card style={{ width: "25rem" }} className="m-auto my-3">
            <Card.Body>
              <Card.Title>Stopwatch / Timer</Card.Title>
              <Card.Text>
                {oneOrTwoNum(hours)} Hora{pluralSingular(hours)} - {oneOrTwoNum(minutes)} Minuto{pluralSingular(minutes)} - {oneOrTwoNum(seconds)} Segundo{pluralSingular(seconds)}
              </Card.Text>
            </Card.Body>
            <Card.Footer>{oneOrTwoNum(hours)}:{oneOrTwoNum(minutes)}:{oneOrTwoNum(seconds)}</Card.Footer>
          </Card>
          </Col>
        </Row>
      </Container>
    );
  };
  

