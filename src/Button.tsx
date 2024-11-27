export default function Button() {
    return(
        <button onClick={()=> alert("Button")}>Button</button>
    )
}

export function FancyButton() {
    return(
        <button onClick={()=> alert("FancyButton")}>Fancy Button</button>
    )
}


export function SmallButton() {
    return(
        <button onClick={()=> alert("SmallButton")}>Small Button</button>
    )
}