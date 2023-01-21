import { Button, Form } from "react-bootstrap";

export const FormTask = ({onChange, inputsValues}) => {
  return (
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="Ingresar el titulo" onChange={onChange}  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="text" placeholder="Ingresar una URL " onChange={onChange} />
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Descripción</Form.Label>
        <Form.Control as={'textarea'} placeholder="Ingrese descripción" onChange={onChange} />
      </Form.Group>

      <Button variant="success" type="submit" className="mx-2">
        Agregar
      </Button>
      <Button variant="danger" type="reset">
        Reiniciar
      </Button>
    </Form>
  );
};
