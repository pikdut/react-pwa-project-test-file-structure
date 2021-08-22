import styled, { css } from "styled-components";

const ActiveLink = styled.div`
    text-decoration: none;
    ${props => props.active && css`
        color: red;
    `}
`


export default ActiveLink