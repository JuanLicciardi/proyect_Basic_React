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
            return [...state, newTask];
        case "UPDATE":
            const taskToUpdate = action.payload
            const tasksUpdate = state.map((task)=>{
                if(task.id === taskToUpdate.id) {
                    return {
                        ...task,
                        ...taskToUpdate
                    }
                }
            })
            return tasksUpdate;
          
        default:
            return state;
    }
}



export const TaskManager = () =>{
    const refForm = useRef(null);
    const [inputsValues,setInputValues,handleChangeInputsValue, reset] = useForm({},refForm)
    const [action, setAction] = useState("CREATE");
    // const [tasks, setTasks] = useState([])

    const [tasks, dispatch] = useReducer(taskReducer,[])

    const handlesubmit = (e) =>{
        e.preventDefault();

        if(action === "CREATE"){
            dispatch({type:"ADD",payload:inputsValues})
        }

        if(action === "UPDATE"){
            dispatch({type:"UPDATE",payload:inputsValues})
        }

       
      //  setTasks([...tasks,inputsValues]); 
        reset();
    }

    const handleUpdate = (id) => {
        console.log('Editando algo ....  ' + id)
        const taskFound = tasks.find((task)=> task.id === id )
        setInputValues(taskFound);
        setAction("UPDATE")
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
                    action = {action}
                />
            </Col>
            <Col sm={12} lg={9} >
             { tasks.map((task) => {
                   return <CardItem  key={task.id} task = {task} onUpdate = {handleUpdate}/>
                    } )
                }
 
             </Col>
        </Row>
    </Container>
   )

}