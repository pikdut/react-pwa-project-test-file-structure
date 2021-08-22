import { Col, Container, Row } from "react-bootstrap"
import img from '../../assets/images/about.png'
import img2 from '../../assets/images/about2.png'

const url = window.location.pathname;

const activeUrl = (path) => {
    return url === path;
}

const divStyle = {
    marginTop: '25px',
    marginBottom: '25px'
}


const AboutUS = () => {
    return (
        <Container style={{marginBottom: "45px"}}>
            <div className="text-left" style={divStyle}>
                {activeUrl('/about-us') && <h2> ABOUT US</h2> }
            </div>

            <Row >
                <Col style={{paddingTop: '320px'}}>
                    <img src={img2} alt="about2" width="100%" className='smooth-edge'/>
                </Col>
                <Col style={{paddingTop: '25px'}}>
                    <img src={img} alt="about" width="100%" className="smooth-edge"/>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUS