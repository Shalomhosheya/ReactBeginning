import './App.css'
import ChildButton from "./components/Button.tsx";
import {useState} from "react";

function App() {


    const[count, setContent] = useState(0);
    function increeseCount(type){
        setContent(count+1)
    }
  return (
    <div>
        <ChildButton name ={"Click : "+count} count={count} onClick={increeseCount}/>
        <br/>
        {/*{count}*/}
    </div>
  )
}


export default App
