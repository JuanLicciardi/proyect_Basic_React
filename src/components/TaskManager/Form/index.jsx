import { Button, Form } from "react-bootstrap";

export const FormTask = ({onChange, inputsValues,onSubmit,refForm}) => {
  return (
    <Form onSubmit={onSubmit} ref={refForm}>
      <Form.Group className="mb-3" >
        <Form.Label>Titulo</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ingresar el titulo"
          value={inputsValues.title} 
          onChange={onChange}
          name= "title"  
        />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Imagen</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ingresar una URL"
          value={inputsValues.img} 
          onChange={onChange}
          name="img" 
        />
      </Form.Group>


      <Form.Group className="mb-3" >
        <Form.Label>Descripción</Form.Label>
        <Form.Control 
          as={'textarea'} 
          placeholder="Ingrese descripción" 
          value={inputsValues.description}
          onChange={onChange}
          name="description" />
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
