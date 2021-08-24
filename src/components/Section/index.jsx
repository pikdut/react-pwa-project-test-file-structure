import styled, { css } from "styled-components"

const Section = styled.div`
    padding-top: 25px;
    padding-bottom:25px;
    text-align: center;


    ${props => props.tp && css `
        padding-top: ${props.tp};
    `}

    ${props => props.bt && css `
        padding-bottom: ${props.bt};
    `}

    ${props => props.ta && css `
        text-align: ${props.ta}
    `}
`
export default Section