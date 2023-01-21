import { useState } from "react";

export const useForm = (initialState) => {
    const [state, setState] = useState(initialState);

    const handleChange = ({target:{name,value}}) => 
        setState({
            ...state,
            [name]:value,
        });

        const reset = () => {
            setState(initialState)
        }

        return [state,setState,handleChange, reset]
}