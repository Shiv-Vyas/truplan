import React from "react";
import {Accordion, Container} from "react-bootstrap"
function FAQ(){
    return(
        <Container className="formContainer">
            <h1 style={{marginBottom:"3vh"}}>Some of our clients frequently asked questions:</h1>
    <Accordion style={{marginBottom:"11vh"}}>
    <Accordion.Item eventKey="0">
      <Accordion.Header>What is the process for measuring and drafting?</Accordion.Header>
      <Accordion.Body>
        The process is very simple and customer friendly. First, we discuss in detail what our clients need are; which will generally involve a full measurement of their property and a floorplan draft. Then, we send one of our surveyors to measure the property on an agreed date. After we get the measurements, we draft the property on a drafting software like Softplan and Autocad. Lastly, we deliver the floorplan to the client in their preferred file format. 
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>How long will the surveyor be in the property?</Accordion.Header>
      <Accordion.Body>
        The time spent in the property will depend on the size of the property and the amount of detail requested in the floorplan. For reference a simple marketing plan for a 2000-3000 sqft residence will take a maximum of 1 hour. For most properties, the estimated time to do the measurements will be discussed on the phone prior to the surveyor being sent.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="2">
      <Accordion.Header>How long does the drafting process take?</Accordion.Header>
      <Accordion.Body>
        Again, it mostly depends on the size of the property and detail requested. Our drafters have years of experience drafting all sorts of properties so our drafting times are guaranteed to be quick and efficient. For reference, most residential drafts can be done on the same day they were measured depending on the backlog we have.
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="3">
      <Accordion.Header>How long until I get the delivery of my floorplan?</Accordion.Header>
      <Accordion.Body>
        After we have measured and drafted your floorplan, we will send it to you right away. Most of the time it is within the same week that it was measured. There are exceptions when the properties are large residences, stores or factories; which take longer to measure and draft.  
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="4">
      <Accordion.Header>Can I request revisions to the plan?</Accordion.Header>
      <Accordion.Body>
        After the plan is completed and delivered, you are able to request a revision. Generally it will not cost extra to have a few revisions. If you notice something wrong with the floorplan then you are always welcome to contact us via our phone number and email address. 
      </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="5">
      <Accordion.Header>When do I get charged?
      </Accordion.Header>
      <Accordion.Body>
        We will send you an invoice only after we have made and delivered you our floorplans. The floorplans are still licensed to Truplan until we recieve payment but we send all our customers the floorplans beforehand so they get a chance to see the product they are paying for.
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  </Container>)
}

export default FAQ;