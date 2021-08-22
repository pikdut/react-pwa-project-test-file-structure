import { Container, Form, Button } from "react-bootstrap"

const divStyle = {
    marginTop: '25px'
}

const ContactUS = () => {
    return (
        <>
            <Container className="text-left" style={divStyle}>
                <h2> CONTACT US  </h2>
                <br/>
                <br/>
                <br/>
                <Form>
                    <Form.Group className="mb-3"     controlId="forfirstName">
                        <Form.Label>  First Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forlastName">
                        <Form.Label>  First Last Name </Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Email address </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forphoneNumber">
                        <Form.Label>  Phone #: (Optional) </Form.Label>
                        <Form.Control type="number"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="forSubject">
                        <Form.Label>  Subject </Form.Label>
                        <Form.Control type="number" placeholder="Enter Subject"/>
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="forSubject">
                        <Form.Label>  Message </Form.Label>
                        <Form.Control as="textarea" style={{ height: '100px' }}/>
                    </Form.Group> 

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
        
    )
}

export default ContactUS