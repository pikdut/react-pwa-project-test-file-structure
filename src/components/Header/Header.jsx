import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.jpg"

function Header() {

  const url = window.location.pathname;

  const activeUrl = (path) => {
    return url === path ? 'active-link nav' : 'nav';
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"> 
          <img src={logo} alt=""  width='75px' height="55px" style={{borderRadius: '5%'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"> 
          <Nav>
            <Nav.Link href="/" className={activeUrl('/')}> Home </Nav.Link>
            <Nav.Link href="/services" className={activeUrl('/services')}> Services </Nav.Link>
            <Nav.Link href="/about-us" className={activeUrl('/about-us')}> About Us </Nav.Link>
            <Nav.Link href="/contact-us" className={activeUrl('/contact-us')}> Contact Us </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
