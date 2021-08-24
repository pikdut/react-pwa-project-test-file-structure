import { Col, Container, Row } from "react-bootstrap"

const ContactUS = () => {
    return (
        <>
            <Container>
                <div className="d-flex">
                <div className="row my-2 mx-2">
                    <div className="col-md-6"> 
                        <img src="https://png.pngtree.com/png-vector/20190725/ourlarge/pngtree-message-icon-design-vector-png-image_1587713.jpg" alt="IMG" />
                    </div>
                    
                    <div className="col-md-6">
                        <h2 className="form-title text-center">CONTACT US</h2>
                        <p className="justify text-muted text-center">Have an enquiry or would like to give us feedback?<br />Fill out the form below to contact our team.</p>
                        <form>
                            <div className="form-group pt-2 pl-1"> <label for="exampleInputName">Your name</label> <input type="text" className="form-control" id="exampleInputName" /> </div>
                            <div className="form-group pl-1"> <label for="exampleInputEmail1">Your email address</label> <input type="email" className="form-control" id="exampleInputEmail1" /> </div>
                            <div className="form-group pl-1"> 
                                <label for="exampleFormControlTextarea1"> Your message </label> 
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea> 
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="row">
                                <div style={{textAlign: 'right'}}>
                                    <button type="submit" className="btn btn-primary">
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </Container>
        </>
    )
}

export default ContactUS;