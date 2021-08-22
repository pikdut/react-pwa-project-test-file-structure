import { Col, Container, Row } from "react-bootstrap"
import banner from '../../assets/images/banner.jpg'
import Section from "../Section"


const bannerSyle = {
    background: '#f7644b'
}

const Banner = () => {
    return (
        <Section style={bannerSyle}>
            <Container>
                <Row>
                    <Col> <img src={banner} alt="banner" width='74%' /> </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default Banner 