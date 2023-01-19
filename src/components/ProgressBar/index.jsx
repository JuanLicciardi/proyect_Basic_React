import { useState } from "react";
import { Container, Col, Row, Card, Button, ProgressBar as BarProgress, Form } from "react-bootstrap";

export const ProgressBar = () => {

    const [now, setNow] = useState (90);
    const handleDownload = () => {

    }

    return(
        <Container>
            <Row className="mt-5" >
                <Col xs={12} lg={{span:8, offset:2}} className="text-center" >
                    <Card style={{width:'40rem'}} className="m-auto" >
                        <Card.Body>
                            <Card.Title>Progress Bar</Card.Title>
                            <BarProgress animated now={now} label={`${now}%`} variant="danger" />
                            <Form.Control
                                placeholder="Ingrese un valor"
                                className="my-3"
                            >

                            </Form.Control>


                            
                            <Button variant="primary">Go somewhere </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )


}