import './App.css'
import ChildButton from "./components/Button.tsx";
function App() {

    function handleClick(type:string){
        console.log(type)
        alert(type)
    }
  return (
    <div>
        <ChildButton name={'Dashboard'} onClick={handleClick}/>
        <ChildButton name={'Add Customer'} onClick={handleClick}/>
        <ChildButton name={'Delete Customer'} onClick={handleClick}/>
    </div>
  )
}


export default App
