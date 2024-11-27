export default function ChildButton(props) {
    const name = props.name
    return(
        <button onClick={() => props.onClick(name)}>{props.name}</button>
    )
}