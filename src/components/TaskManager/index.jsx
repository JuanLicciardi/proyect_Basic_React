import React, { useReducer } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FormTask } from "./Form"
import { useForm } from "../../hook/useForm"
import { useRef } from "react"
import { CardItem } from "./CardItem"
import { useState } from "react"


const generateId = () => Math.random().toString(36).substring(2,100)

const taskReducer = (state, action) => {
    switch (action.type){
        case 'ADD':
            const newTask = {
                ...action.payload,
                id: generateId(),
                active: false,
                completed:false,
            }
            console.log('PAYLOAD :', newTask);
            return [...state, action.payload]
          
        default:
            break;
    }
}



export const TaskManager = () =>{
    const refForm = useRef(null);
    const [inputsValues,setInputValues,handleChangeInputsValue, reset] = useForm({},refForm)
   // const [tasks, setTasks] = useState([])

    const [tasks, dispatch] = useReducer(taskReducer,[])

    const handlesubmit = (e) =>{
        e.preventDefault();
        dispatch({type:"ADD",payload:inputsValues})
      //  setTasks([...tasks,inputsValues]); 
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
             { tasks.map((task, index) => {
                   return <CardItem  key={index} task = {task} />
                    } )
                }
 
             </Col>
        </Row>
    </Container>
   )

}