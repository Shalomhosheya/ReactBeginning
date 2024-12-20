import './App.css';
import {useReducer} from "react";
const initialState = 0;
function countReducer(state = initialState, action:{type:string,payload:number}) {
    switch (action.type){
        case "ADD_Counter":
            return state += action.payload;
            case "REMOVE_Counter":
                return state -= action.payload;
                default:
                    return state
    }
}

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

