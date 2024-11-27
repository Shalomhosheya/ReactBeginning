import './App.css'
import Dashboard from "./components/Dashbord.tsx";
import LoginComponent from "./components/LoginComponent.tsx";

function App() {

    const login : boolean = false;

  return (
    <>
        {login ?<Dashboard/>:<LoginComponent/>}
    </>
  )
}


export default App
