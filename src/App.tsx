import './App.css';
import {useReducer} from "react";
import {countReducer, initialState} from "./reducers/CountReducers.tsx";

function App(){
const [count,dispatch]= useReducer(countReducer,initialState);
    return (
    <>
        <h2>{count}</h2>
        <button className="btn" onClick={() =>dispatch({type:"ADD_Counter",payload :1})}> Increment </button>

        <button className="btn" onClick={() =>dispatch({type:"REMOVE_Counter",payload :1})}> Decrement</button>
    </>
    )
}

export default App;

