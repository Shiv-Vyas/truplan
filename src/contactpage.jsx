import React from "react";
import {Container, Form, Button } from "react-bootstrap"
import emailjs from '@emailjs/browser';
import {useState} from "react"
function Contacter(){

    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const[newText, textUpdate] = useState("");
    const[newTextClass, classUpdate] = useState("outOfFlow");
    const[name, nameUpdate] = useState("");
    const[email, emailUpdate] = useState("");

    
   const handleSubmit=(e)=> {
            var newObject ={
                subject: e.target.subject.value,
                body: e.target.body.value,
                email: e.target.email.value
            }
        emailjs.send('service_f3v3w1f', 'template_p787gi8', newObject, "jnSuSciRTxLB-LM8p")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       textUpdate("Thank you for contacting us. We will get back to you A.S.A.P.")
       classUpdate("success")
    }, function(error) {
       console.log('FAILED...', error);
       textUpdate("Sorry, something went wrong. Please try again.")
       classUpdate("error")
    });
        e.preventDefault();
      }
 
      return (
        <Container className="formContainer">
            <h1>Contact us</h1>
            <h6 style={{color:"#e74c3c", marginBottom:"3vh"}}>If you have any inquiries, you can contact us by calling or emailing us. You can also quickly fill out the short form and we will get back to you soon. Otherwise, check out our <a style={{color: "#3742fa", textDecoration:"none", fontSize:"1.2rem"}} href="/FAQ">FAQ</a> for commonly asked questions.</h6>
            
            <h5 style={{marginBottom:"3vh"}}>Call Us: 416-573-2096 | Email us: truplan@sympatico.ca</h5>
            


            <Form onSubmit={e=>handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Full Name</Form.Label>
    <Form.Control required="true"  type="text" placeholder="Name" name="name" onChange={e=>nameUpdate(e.target.value)} value={name}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control required="true"  type="email" placeholder="Email" name="email" onChange={e=>emailUpdate(e.target.value)} value={email}/>
  </Form.Group>
  <Form.Group className="mb-1" controlId="formBasicEmail">
    <Form.Label>Subject</Form.Label>
    <Form.Control required="true"  type="text" placeholder="Subject" name="subject" onChange={e=>setSubject(e.target.value)} value={subject}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label></Form.Label>
    <Form.Control required="true"  as="textarea" rows={8} placeholder="Enter text..." name="body" onChange={e=>setBody(e.target.value)} value={body}/>
  </Form.Group>

 <Button size="lg" className= "buttonClass" variant="success" type="submit">
        Submit
  </Button>
</Form>
<h1 className={newTextClass}>{newText}</h1>
        </Container>
      );
      }




export default Contacter;