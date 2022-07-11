import React, {useState} from "react";
import {Form, Button, Container, Row, Col} from "react-bootstrap";
import axios from "axios"

function Quote() {

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const[email, emailUpdate] = useState("");
  const [propertyType, setProperty] = useState("");
  const[sqft, setSqft] = useState("");
  const[address, setAddress] = useState("");
  const[number, setNumber] = useState("");
  const[additional, setAdditional] = useState("");
  const[newText, textUpdate] = useState("");
  const[newTextClass, classUpdate] = useState("outOfFlow");

  const handleSubmit=(e)=> {
    e.preventDefault();
    const newObject ={
        fname: e.target.fname.value,
        lname: e.target.lname.value,
        email: e.target.email.value,
        property: e.target.propertyType.value,
        sqft: e.target.sqft.value,
        address: e.target.address.value,
        number: e.target.number.value,
        additional: e.target.additional.value
    }

    textUpdate("Thank you for contacting us. We will get back to you A.S.A.P.")
    classUpdate("success")
axios.post("https://truplan-web.herokuapp.com/create", newObject);

}


    return(

        <Container fluid className="formContainer">
            <h1>
                Get a custom quote by filling out this simple form
            </h1>
            <h6 style={{marginBottom:"4vh", marginTop:"2vh"}}>
                We require this minimum information to make an accurate estimation of how much you will be charged for our services. This quote is only an estimate, if you decide we are the right fit for your needs, we will discuss the project in more detail. 
            </h6>
          
            <Form style={{position:"relative"}}onSubmit={e=>handleSubmit(e)} >
            <Row>
                <Col md={6}>
        <Form.Group className="mb-3" controlId="formBasicfName">
          <Form.Label>First Name</Form.Label>
          <Form.Control required ={true} type="name" value={fname} onChange={e=>setFName(e.target.value)} name="fname" placeholder="Enter first name" />
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3" controlId="formBasiclName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control required ={true} type="name"  value={lname} onChange={e=>setLName(e.target.value)} name="lname" placeholder="Enter last name" />
        </Form.Group>
        </Col>
        </Row>
        <Row>
        <Col md={6}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control required ={true} type="email"  value={email} onChange={e=>emailUpdate(e.target.value)} name="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Your email will only be used by us to get in touch with you. 
    </Form.Text>
  </Form.Group>
        </Col>
        <Col md={6}>
  <Form.Group className="mb-3" controlId="formBasicType">
          <Form.Label>Type Of Property</Form.Label>
          <Form.Control required ={true} type="name"  value={propertyType} onChange={e=>setProperty(e.target.value)} name="propertyType" placeholder="e.g. residential" />
        </Form.Group>

        </Col>
        </Row>
  
  <Row>

<Col md={6}>
  <Form.Group className="mb-3" controlId="formBasicSquare">
          <Form.Label>Square Footage</Form.Label>
          <Form.Control required ={true} type="number"  value={sqft} onChange={e=>setSqft(e.target.value)} name="sqft" placeholder="Enter total square footage number" />
        </Form.Group>
        </Col>

        <Col md={6}>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Label>Property Address</Form.Label>
          <Form.Control required ={true} type="name"  value={address} onChange={e=>setAddress(e.target.value)} name="address" placeholder="Enter the properties address" />
        </Form.Group>
        </Col>
  </Row>
    
    <Row>
        <Col md={6}>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control required ={true} type="number"  value={number} onChange={e=>setNumber(e.target.value)} name="number" placeholder="Enter your phone number" />
          <Form.Text className="text-muted">
      Your number will only be used by us to get in touch with you. 
    </Form.Text>
        </Form.Group>
        </Col>
        <Col md={6}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Any additional information</Form.Label>
    <Form.Control as="textarea"  value={additional} onChange={e=>setAdditional(e.target.value)} name="additional" rows={2} />
  </Form.Group>
  </Col>
        </Row>
        <Button className="buttonClass" size="lg" variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <h1 className={newTextClass}>{newText}</h1>
      </Container>

      
    )

    }


export default Quote;