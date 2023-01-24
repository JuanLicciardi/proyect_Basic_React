import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FormTask } from "./Form"
import { useForm } from "../../hook/useForm"
import { useRef } from "react"

export const TaskManager = () =>{
    const refForm = useRef(null);
    const [inputsValues,setInputValues,handleChangeInputsValue, reset] = useForm({},refForm)
    
    const handlesubmit = (e) =>{
        e.preventDefault();
        reset();
    }

   return (
    <Container className="mt-5" >
        <Row>
            <Col sm={12} lg={3} >
                <FormTask 
                    onChange={handleChangeInputsValue}
                    inputsValues={inputsValues}
                    onSubmit ={handlesubmit}
                    refForm={refForm}
                />
            </Col>
            <Col sm={12} lg={9} >
            </Col>
        </Row>
    </Container>
   )

}