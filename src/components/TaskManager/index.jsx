import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FormTask } from "./Form"
import { useState } from "react"
import { useForm } from "../../hook/useForm"

export const TaskManager = () =>{

    const [inputValues, setInputValues] = useState({});

    const [state,setState,handleChange, reset] = useForm()
    
    const handleChangeInputsValue = ({target}) => {
        setInputValues({
            ...inputValues,
            [target.name]:target.value
        })
    }

    const handlesubmit = (e) =>{
        e.preventDefault()

    }

   return (
    <Container className="mt-5" >
        <Row>
            <Col sm={12} lg={3} >
                <FormTask  />
            </Col>
            <Col sm={12} lg={9} >
                <FormTask onChange={handleChangeInputsValue} inputsValues={inputValues} />
            </Col>
        </Row>
    </Container>
   )

}