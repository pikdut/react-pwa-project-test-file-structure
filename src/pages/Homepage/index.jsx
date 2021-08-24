import Banner from "../../components/Banner"
import Section from "../../components/Section"
import AboutUS from "../AboutUs"
import ContactUS from "./components/ContactUs"
import Testemonials from "../Testemonials"
import TheTeam from "./components/TheTeam"
import './style.scss'

const Homepage = () => {
     return (
         <>     
            <Banner />
        
            <Section bt="50px" tp="50px">
                <AboutUS />
            </Section>

            <Section className="testemonials"> 
                <Testemonials />
            </Section>

            <Section bt="70px" tp="80px" className="the-team">
               <TheTeam />
            </Section>
                    
            <Section ta='left' className="contact-us">
                <ContactUS /> 
            </Section> 
         </>
     )
}

export default Homepage