export default function ChildButton(props) {
    const count = props.count
    return(
        <button onClick={() => props.onClick(count)}>{props.name}</button>
    )
}