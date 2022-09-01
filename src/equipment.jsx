import React from "react";
import {Container, Row, Col, Button} from "react-bootstrap"
import softplan from "./images/softplan.jpg"
import autocad from "./images/autocad.png"
import laserone from "./images/laserone.jpg"
import lasertwo from "./images/lasertwo.png"
import laserthree from "./images/laserthree.jpg"
function Equipment(){
    return(
        <Container style={{padding:"0vh 2vh", marginTop:"3vh", textAlign:"Center"}}>
        
          <Row style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"left"}}>
            <Col >
            <h3>Softplan is used universally for architectural and real estate design.</h3>
            <p >Truplan has been using Softplan since its conception two decades ago and it has been a staple in our company ever since. We have created some beautiful floorplans using this software over the years; check out some of our samples here:</p>
            <Button className="buttonClass" href="/samples" variant="success">Samples</Button>
    </Col>
    <Col md={6}>

    <Container className="sampleContainerMid"fluid>
    <img  alt ="logo "id="firstSample" className ="sampleImage"src={softplan}></img>
        </Container>
    </Col>
    </Row>
    <Row className="sampleRow" style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"left"}}>
                <Col md= {6}>
        <Container className="sampleContainerMid"fluid>
       <img alt ="logo " className ="sampleImage"src={autocad}></img>
        </Container>
        </Col>
        <Col md= {6}>
        <h3>We are also familiar with the architectural program Autocad</h3>
                <p >Although we primarily use Softplan to draft our floorplans. Both Softplan and Autocad have compatible and transferrable files. Some of our customers prefer Autocad files as delivery and we are more than happy to work according to their preferences.</p>
        </Col>
        </Row>
<hr style={{height:"0.2vh", backgroundColor:"black", boxShadow:"2px 2px 5px black"}}></hr>
        <Row style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"center"}} >
            <Col lg={12}>
        <h3 style={{marginBottom:"4vh", marginTop:"4vh"}}>Our favourite laser measuring tools</h3>
        
        </Col>
        <Col lg={4}>
        <Container className="sampleContainerLarge"fluid>
            <p>The <b>BOSCH GLM400CL Blaze</b> is a perfect laser measuring tool for outdoor measuring of gardens, yards and lawns. It has an accurate measuring distance of 400ft and accuracy up to 1/16th of an inch.</p>
        <img alt ="laser "className ="sampleImageEquipment"src={laserone}></img>
        </Container>
        </Col>
        <Col lg={4}>
        <Container className="sampleContainerLarge"fluid>
        <p>The <b>Leica DISTO E7400x</b> is perfect for measurements involving many functions because of it's 360 degree view. It can calculate heights and widths of large areas effortlessly.</p>
        <img alt ="laser "className ="sampleImageEquipment"src={laserthree}></img>
        </Container>
        </Col>
        <Col lg={4}>
        <p>The <b>Leica DISTO E7500i</b> is a measuring powerhouse. It's laser ranges upto 650 ft with an accuracy up to 1mm. This is a great tool to use for measuring large commercial and industrial properties.</p>
        <Container className="sampleContainerLarge"fluid>
        <img alt ="laser "className ="sampleImageEquipment"src={lasertwo}></img>
        </Container>
        </Col>
        </Row>

    </Container>
        )
    }


export default Equipment;