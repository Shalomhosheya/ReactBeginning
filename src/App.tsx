import './App.css';
import {useReducer, useState} from "react";
import {countReducer2, initialState2} from "./reducers/CountReducers.tsx";

function App(){
   const[name,dispatch] = useReducer(countReducer2,initialState2)
    const[firstname, setFirstname] = useState('');
    const[lastname, setLastName] = useState('');
    return (
        <>
            <input type="text" placeholder="First Name" onChange={(e) => {
                setFirstname(e.target.value)
            }}/>
            <input placeholder="Last Name" onChange={(e) => {
                setLastName(e.target.value)
            }}/>

            <button onClick={()=>dispatch({type:"print",payload:{firstname,lastname}})}>Submit</button>

            <h3>{name.firstname} {name.lastname}</h3>

        </>

    )
}

export default App;



