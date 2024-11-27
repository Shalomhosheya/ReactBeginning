import './App.css'
import ChildButton from "./components/Button.tsx";
import {useState} from "react";

function App() {

    // let content :string = 'Dashboard';
    const[content, setContent] = useState('');
    function handleClick(type:string){
        console.log(type)
        alert(type)
        // content=type
        setContent(type)
    }
  return (
    <div>
        <ChildButton name={'Dashboard'} onClick={handleClick}/>
        <ChildButton name={'Add Customer'} onClick={handleClick}/>
        <ChildButton name={'Delete Customer'} onClick={handleClick}/>
        <br/>
        {content}
    </div>
  )
}


export default App
