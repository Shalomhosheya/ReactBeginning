// import './App.css';
// import {createBrowserRouter, RouterProvider} from "react-router"
// import {Dashboard} from  "./pages/Dashboard.tsx";
// import {Addcustomer} from  "./pages/Addcustomer.tsx";
// import {DeleteCustomer} from  "./pages/DeleteCustomer.tsx";
// import {UpdateCustomer} from  "./pages/UpdateCustomer.tsx";
//
// function App(){
//     const routes = createBrowserRouter([
//         {path:'',element:<Dashboard/>},
//         {path:'/add',element:<Addcustomer/>},
//         {path:'/delete',element:<DeleteCustomer/>},
//         {path:'/update',element:<UpdateCustomer/>}
//
//     ])
//
//     return (
//         <div>
//           <RouterProvider router={routes}/>
//         </div>
//     );
// }
//
// export default App;
//






/*

import './App.css';
import { ChangeEvent, useState } from 'react';
import {Customer} from "./model/Customer.ts";

function App() {
    const [customer, setCustomer] = useState<Customer[]>([]);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [updateIndex, setUpdateIndex] = useState<number | null>(null);

    function addCustomer() {
        const newCustomer = new Customer(name, email, phone);
        setCustomer((prevCustomers) => [...prevCustomers, newCustomer]);
        setName('');
        setEmail('');
        setPhone('');
    }

    function deleteCustomer() {
        setCustomer((prevCustomers)=> prevCustomers.slice(0, -1));
        setName('');
        setEmail('');
        setPhone('');
    }
    function updateCustomer() {
        if (updateIndex !== null && updateIndex >= 0 && updateIndex < customer.length) {
            const updatedCustomer = new Customer(name, email, phone);
            setCustomer((prevCustomers) =>
                prevCustomers.map((cust, index) =>
                    index === updateIndex ? updatedCustomer : cust
                )
            );
            setUpdateIndex(null);
            setName('');
            setEmail('');
            setPhone('');
        } else {
            alert("Invalid index for update!");
        }
    }
    function resetText(){
        setName('');
        setEmail('');
        setPhone('');
    }
    function selectForUpdate(index: number) {
        setUpdateIndex(index);
        const cust = customer[index];
        setName(cust.name);
        setEmail(cust.email);
        setPhone(cust.phone);
    }

    return (
        <div>
            <input
                className="inputs"
                name="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <input
                className="inputs"
                name="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <input
                className="inputs"
                name="phone"
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
            />

            <br/>
            <br/>

            <button
                id="customer" onClick={addCustomer}>Add Customer</button>

            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={updateCustomer} id="updateCustomer">
                {updateIndex !== null ? "Update Customer" : "Update Customer"}
            </button>

            <button onClick={resetText} id="resetText">
                Reset Text
            </button>

            {customer.map((cust, index) => (
                <div key={index}>
                    <h2>
                        {cust.name + " " + cust.email + " " + cust.phone}
                    </h2>
                    <button onClick={() => selectForUpdate(index)}>
                        Edit
                    </button>
                </div>
            ))}


        </div>
    );
}

export default App;*/
/*
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router"
import Dashboard from  "./pages/Dashboard.tsx";
import Addcustomer from  "./pages/Addcustomer.tsx";
import DeleteCustomer from  "./pages/DeleteCustomer.tsx";
import UpdateCustomer from  "./pages/UpdateCustomer.tsx";
import RootLayout from "./components/RootLayout.tsx";

function App(){
    const routes = createBrowserRouter([
        {
            path: "",
            element:<RootLayout/>,
            children:[
                {path:'',element:<Dashboard/>},
                {path:'/add',element:<Addcustomer/>},
                {path:'/delete',element:<DeleteCustomer/>},
                {path:'/update',element:<UpdateCustomer/>}
            ]
        }
    ])

    return (
        <div>
            <RouterProvider router={routes}/>
        </div>
    );
}

export default App;

*/
