import { Container, Col, Row } from "react-bootstrap"
import prof from '../../assets/images/profile.png'
import prof2 from '../../assets/images/profile2.png'
import prof3 from '../../assets/images/profile3.png'
import prof4 from '../../assets/images/profile4.png'

const TheTeam = () => {
    return (
        <Container >
            <h2> MEET THE TEAM </h2>
            <br />
            <br />
            <Row>
                <Col>
                    <img src={prof} alt="jemar" className='circle' width="50%"/>
                    <div className="">
                        <h4> Jemar </h4>
                        <span color='red'> Graphic Designer / Animator  </span>
                    </div>
                </Col>
                <Col>
                    <img src={prof2} alt="joey" className='circle' width="50%"/>
                    <div className="">
                        <h4> Joey </h4>
                        <span color='red'> Founder / Owner  </span>
                    </div>
                </Col>
                <Col>
                    <img src={prof3} alt="mark" className='circle' width="50%"/>
                    <div className="">
                        <h4> Mark </h4>
                        <span color='red'> Content Writer / Social Media Manager  </span>
                    </div>
                </Col>
                <Col>
                    <img src={prof4} alt="rhea" className='circle' width="50%"/>
                    <div className="">
                        <h4> Rhea </h4>
                        <span color='red'> Animator / Video Editor  </span>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TheTeam