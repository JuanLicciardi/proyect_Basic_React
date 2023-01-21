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

      const intervalSeconds = setInterval(()=>{
        setSeconds((s)=>{
            if(s > 59){
                console.log("pasada por aca")
                setMinutes((m) => {
                  if (m > 59){
                    return 0
                  }
                  return m + 1
                })
                console.log("valor s", s)
                return 0
            }
            return s + 1
        })
      }, 1000/velocity);


/*         const intervalMinutes = setInterval(()=>{
          setMinutes((m) => {
            if (m===59){
              return 0
            }
            return m + 1
          })
        },60000/velocity)
 */   

    const intervalHours = setInterval (()=>{
      setHours ((h) =>{
        return h+1
      })
    }, 3599999/velocity)



    setIntervalSeconds(intervalSeconds)
    //setIntervalMinutes(intervalMinutes)
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
      <Container className="BodyContainer" >
      <Row xs={6} className="rowPrimary">
        <h1 className="titulo" >PRACTICA STOP WATCH TIMER</h1>
      </Row>
        <Row className="mt-5" >
          <Col xs={6} lg={{span:5, offset:1 }}  className="mi text-center mt-4">
          <ButtonGroup aria-label="Basic example" className="d-block my-2">
            <Button variant="outline-success" onClick={handleStart} disabled={stateIntervalSeconds && stateIntervalMinutes && stateIntervalHours} >Comenzar</Button>
            <Button variant="outline-danger" onClick={handleStop} className="mx-4" >Detener</Button>
            <Button variant="outline-dark" onClick={handleReset}  >Reiniciar</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button className="bk-primary text-color-white" disabled={true} >Velocity</Button>
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
          <Col xs={5} 
             md={{span:4, offset:1 }}  
             className="text-center m-4 boxInfo"
        > 
          <div className="boxInfo_1">
            <h4 className="tituloExplicativo"  >Consigna:</h4>
            <p className="parrafo" >Implementación de un cronómetro / temporizador con <strong>HORAS, MINUTOS y SEGUNDOS</strong>,
            con los botones de <strong>START, STOP y RESET</strong>.
            Tiene un velocímetro con 5 velocidades.</p>
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
  

