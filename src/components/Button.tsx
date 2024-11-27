export default function ChildButton(props:{children:React.ReactNode}) {
    return(
        <button onClick={()=> alert("Button")}>{props.children}</button>
    )
}