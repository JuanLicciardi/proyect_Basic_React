import { useRef, useState } from "react";
import { Container, Col, Row, Card, Button, ProgressBar as BarProgress, Form, Modal } from "react-bootstrap";
import ProgressBar2 from "./ProgressBar2";

export const ProgressBar = () => {

    const [now, setNow] = useState (0);
    const [intervalState, setIntervalState] = useState(null)
    const [btnDisable, setBtnDisable] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const inputRef = useRef(null)

    const handleDownload = () => {
        const valueInput = +inputRef.current?.value
        const isValueValid = !isNaN(valueInput) && valueInput > 0 && valueInput <=100
        setShowModal(!isValueValid)

        if (isValueValid){
            const interval = setInterval(()=>{
                setNow ((now) => {
                    if(now === +valueInput){
                        clearInterval(interval)
                        return now
                    }
                    return now + 1
                })
            }, 1000)
            setIntervalState(interval)
        } else {
            handleReset()
        }

        
    }

    const handleReset = () =>{
        setNow(0);
        clearInterval(intervalState)
    }

    const handleChange = ({target:{value}}) =>{
        setBtnDisable(!!!+value)
    }

    const handleClose = () => setShowModal(false)

    return(
        <Container>
            <Row className="mt-5" >
                <Col xs={12} lg={{span:8, offset:2}} className="text-center" >
                    <Card style={{width:'40rem'}} className="m-auto" >
                        <Card.Body>
                            <Card.Title>Progress Bar mio</Card.Title>
                            <BarProgress 
                                animated now={now} 
                                label={`${now}%`} 
                                variant="danger" />
                            <ProgressBar2 now={now} label={`${now}%`}>

                            </ProgressBar2>
                            
                            <Form.Control
                                ref={inputRef}
                                placeholder="Ingrese un valor entre 0 y 100"
                                className="my-3"
                                onChange={handleChange}
                            >
                            </Form.Control>
                            <Button 
                                variant="primary" 
                                className="mx-1"
                                onClick={handleDownload}
                                disabled={btnDisable} 
                            >Descargar </Button>
                            <Button variant="danger" className="m-2"  onClick={handleReset}  >Reiniciar </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleClose}  >
                <Modal.Header closeButton>
                    <Modal.Title>Mensaje...</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                        <h2 className="text-danger text-center py-4" >ERROR... X</h2>
                        <p className="text-muted fs-4 text-center">
                            Solo se aceptan valorres numericos. El valor debe ser mayor a 0 y menor o igual a 100
                        </p>
                    </>
                </Modal.Body>

            </Modal>

        </Container>
    )


}