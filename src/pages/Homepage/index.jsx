import { Col, Container, Row } from "react-bootstrap"
import Banner from "../../components/Banner"
import Section from "../../components/Section"
import AboutUS from "../AboutUs"
import TheTeam from "./TheTeam"

const Homepage = () => {
     return (
         <>     
            <Banner />
        
            <Section bottom="50px" top="50px">
                <AboutUS />
            </Section>

            <Section style={{background: '#f6c5fb'}} bottom="70px" top="80px">
               <TheTeam />
            </Section>
            
            <Section> 
                {/* <Testemonials /> */}
            </Section>
            
            <Section>
                {/* <ContactUS />  */}
            </Section> 
         </>
     )
}

export default Homepage