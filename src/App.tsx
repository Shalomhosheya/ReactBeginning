import './App.css'
import Item from "./components/items.tsx";
import {Customer} from "./components/items.tsx";

function App() {

  return (
    <>
        {/*<Customer title={"RAD"} desc={"dada adad dada dadad dasa adadda"}></Customer>*/}
        <Item title={"RAD"} desc={"text text text text text"}></Item>
        <Item title={"RAD"} desc={"text text text text text"}></Item>
        <Item title={"RAD"} desc={"text text text text text"}></Item>

        <Item title={itemList[0].title} desc={itemList[0].desc}></Item>
        <Customer title={itemList[1].title} desc={itemList[1].desc}></Customer>
        <Customer title={itemList[2].title} desc={itemList[2].desc}></Customer>

        <Item {...itemList[0]}></Item>
        <Item {...itemList[1]}></Item>
        <Item {...itemList[2]}></Item>
    </>
  )
}

const itemList = [
    {
        title: "BAD",
        desc: "text text text text text"
    },
    {
        title: "RAD",
        desc: "text text text text text"
    },
    {
        title: "RAD",
        desc: "text text text text text"
    }

]



export default App
