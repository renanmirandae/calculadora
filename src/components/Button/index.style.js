import styled from "styled-components";

export const ButtonStyled = styled.button`

width: 100%;
padding: 1.5rem;
font-size: 1rem;
font-family: "Roboto", sans-serif;
border: none;
cursor: pointer;
background-color: ${props => props.operador ? "var(--fourth-color)": "var(--primary-color)"};
`;