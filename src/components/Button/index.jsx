import { ButtonStyled } from "./index.style";

export function Button(props)
{
    return(
        <ButtonStyled value={props.value} onClick={props.aoClicar} operador={props.operador}>
            {props.title} 
        </ButtonStyled>
    );
}