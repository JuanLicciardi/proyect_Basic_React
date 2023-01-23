import React, { useState } from "react"
import { Container, Row, Col, Card, ButtonGroup, Button } from "react-bootstrap";
import style from './styles.module.css'


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
      <Container className={`${style.BodyContainer} mt-5`}  >
        <Row xs={6} className={style.rowPrimary}>
          <h1 className={style.titulo} >PRACTICA STOP WATCH TIMER</h1>
        </Row>
        <Row className="mt-5" >
        <Col xs={6} lg={{span:5, offset:1 }}  className="mi text-center mt-4">
          <ButtonGroup aria-label="Basic example" className="d-block my-2">
            <Button variant="outline-success" onClick={handleStart} >Comenzar</Button>
            <Button variant="outline-danger" className="mx-4" onClick={handleStop}  >Detener</Button>
            <Button variant="outline-dark" onClick={handleReset}  >Reiniciar</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button className="bg-primary" >Velocidad</Button>
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
          <Col xs={5} 
             md={{span:4, offset:1 }}  
             className={`text-center m-4 ${style.boxInfo}`}
          > 
            <div className={style.boxInfo_1}>
              <h4 className={style.tituloExplicativo}  >Consigna:</h4>
              <p className={style.parrafo} >Implementación de un cronómetro / temporizador con <strong>HORAS, MINUTOS y SEGUNDOS</strong>,
              con los botones de <strong>START, STOP y RESET</strong>.
              Tiene un velocímetro con 5 velocidades.</p>
              <hr />
              <h4 className={style.tituloExplicativo} >Usaremos:</h4>
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
  

