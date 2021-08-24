import styled, { css } from "styled-components";

const DivWrapper = styled.div`
    ${props => props.pt && css `
        padding-top: ${props.pt};
    `}

    @media (max-width: 768px) {
        padding-top: 25px;
    }
`

export default DivWrapper