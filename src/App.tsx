import './App.css'
import {ChangeEvent, useState} from "react";

function App() {


    // const  [customer ,setCustomer]
    const [customer, setCustomer] = useState({
        firstName : 0,
        lastName : 0
    });


    function handleInputChange(event:ChangeEvent<HTMLInputElement>) {
        setCustomer({
            ...customer,
        [event.target.name]: event.target.value

        })
    }

  return (
    <div>
        <input name={"firstName"} type="text" placeholder={"First Name"} onChange={handleInputChange}/>
        <input name={"lastName"} type="text" placeholder={"Last Name"} onChange={handleInputChange}/>

        <br/>
        <h2>{"Hello "+customer.firstName +" "+customer.lastName}</h2>


    </div>
  )
}


export default App
