import styled, { css } from "styled-components"

const Section = styled.div`
    padding-top: 25px;
    padding-bottom:25px;
    text-align: center;


    ${props => props.top && css `
        padding-top: ${props.top};
    `}

    ${props => props.bottom && css `
        padding-bottom: ${props.bottom};
    `}
`
export default Section