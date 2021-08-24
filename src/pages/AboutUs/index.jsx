import {Container} from "react-bootstrap"
import img from '../../assets/images/about.png'
import img2 from '../../assets/images/about2.png'
import DivWrapper from "../../components/Wrapper/DivWrapper";

const url = window.location.pathname;

const activeUrl = (path) => {
    return url === path;
}

const divStyle = {
    marginTop: '25wpx',
    marginBottom: '25px'
}


const AboutUS = () => {
    return (
        <Container style={{marginBottom: "45px"}}>
            <div className="text-left" style={divStyle}>
                {activeUrl('/about-us') && <h2> ABOUT US</h2> }
            </div>

            <div className="row">
                <DivWrapper pt='320px' className="col-md-6 col-sm-12">
                    <img src={img2} alt="about2" width="100%" className='smooth-edge'/>
                </DivWrapper>
                <DivWrapper pt='25px' className="col-md-6 col-sm-12">
                    <img src={img} alt="about" width="100%" className="smooth-edge"/>
                </DivWrapper>
            </div>
        </Container>
    )
}

export default AboutUS