import { Container  } from "react-bootstrap" 

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="blockquote-footer bg-dark">
            <Container >
                <small className="text-muted">
                    &copy; { year } Click Smart <cite title="Source Title">  All rights reserve. </cite>
                </small>
            </Container>
        </footer>
    )
}

export default Footer