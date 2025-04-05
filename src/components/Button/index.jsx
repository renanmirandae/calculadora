export function Button(props)
{
    return(
        <button value={props.value} onClick={props.aoClicar}>
            {props.title}
        </button>
    );
}