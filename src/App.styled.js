import styled from "styled-components";

export const AppStyled = styled.section`

margin: 2rem auto;
width: 40vw;
height: auto;
border-radius: 15px;
background-color: var(--third-color);
padding: 10px;
display: flex;
flex-direction: column;
gap: 1rem;

.box-visor
{
   color : var(--fifth-color);
   background-color: var(--sixth-color);
   font-size: 3rem;
   padding: 15px 10px;
   border-radius: 15px;
   text-align: right;
}

.box-teclas
{
    width: 100%;
    display: flex;
    flex-direction: column;
}

table{
    border-collapse: collapse;
    /* border: 1px solid red; */
}

`;