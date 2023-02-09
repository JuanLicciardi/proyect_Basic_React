import { Button, Card, Form } from "react-bootstrap"



export const CardItem = () => {
  return (
    <Card style={{width:'18rem'}}>
        <Card.Img variant="top" src="holde.js/100pxx180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                algun texto
            </Card.Text>
            <Form.Control as={'checkbox'}/>
            <Button variant="primary"> Go Somewhere</Button>
        </Card.Body>
    </Card>
  )
}
