import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import sampleOne from "./images/sampleone.jpg";
import sampleTwo from "./images/sampletwo.jpg"
import sampleThree from "./images/samplethree.jpg"
import sampleFour from "./images/samplefour.jpg"
import sampleFive from "./images/samplefive.jpg"
import sampleSix from "./images/samplesix.jpg"

function Samples(){
    return(
        <Container style={{marginTop:"3vh", textAlign:"Center"}}>
            <h1>Displayed below are real plans that Truplan has drafted over the years.</h1>
            <p style={{marginBottom:"3vh", color:"#e84118"}}>*All plans shown are licensed as samples.*</p>
              <Row style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"center"}}>
                <Col >
                <h3>Small main floor residential marketing plan</h3>
                <p style={{color:"#e84118"}}>Click image to enlarge</p>

        </Col>
        <Col md={6}>
 
        <Container className="sampleContainerMid"fluid>
        <a href="/sampleone"><img  alt ="sample "id="firstSample" className ="sampleImage"src={sampleOne}></img></a>
            </Container>
        </Col>
        </Row>
            <Row className="sampleRow" style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"center"}}>
                <Col md= {6}>
        <Container className="sampleContainerMid"fluid>
        <a href="/sampletwo"><img alt ="sample " className ="sampleImage"src={sampleTwo}></img></a>
        </Container>
        </Col>
        <Col md= {6}>
        <h3>Large main floor residential marketing plan</h3>
                <p style={{color:"#e84118"}}>Click image to enlarge</p>
        </Col>
        </Row>
      
        <Row style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"center"}} >
            <Col lg={12}>
        <h3>Large multi-leveled residential marketing plan</h3>
        <p style={{color:"#e84118"}}>Click image to enlarge</p>
        </Col>
        <Col lg={12}>
        <Container className="sampleContainerLarge"fluid>
        <a href="/samplethree"> <img alt ="sample "className ="sampleImage"src={sampleThree}></img></a>
        </Container>
        </Col>
        </Row>

        <Row className="sampleRow" style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"center"}}>
                <Col md= {6}>
        <Container className="sampleContainerMid"fluid>
        <a href="/samplefour"><img alt ="sample " className ="sampleImage"src={sampleFour}></img></a>
        </Container>
        </Col>
        <Col md= {6}>
        <h3>Large detailed ground level and garage residential plan</h3>
                <p style={{color:"#e84118"}}>Click image to enlarge</p>
        </Col>
        </Row>
        <Row style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"center"}}>
                <Col >
                <h3 id="commercialSample">Large commercial detailed plan</h3>
                <p style={{color:"#e84118"}}>Click image to enlarge</p>

        </Col>
        <Col md={6}>
 
        <Container className="sampleContainerMid"fluid>
        <a href="/samplefive"> <img  alt ="sample " className ="sampleImage"src={sampleFive}></img></a>
            </Container>
        </Col>
        </Row>
        
            
        <Row style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"center"}} >
            <Col lg={12}>
        <h3>Large retail marketing plan (77000+ squarefoot)</h3>
        <p style={{color:"#e84118"}}>Click image to enlarge</p>
        </Col>
        <Col lg={12}>
        <Container className="sampleContainerLarge"fluid>
        <a href="/samplesix">  <img alt ="sample "className ="sampleImage"src={sampleSix}></img></a>
        </Container>
        </Col>
        </Row>


        </Container>

    )
}

export default Samples;