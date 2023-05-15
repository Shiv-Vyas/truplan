import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import imageOne from "./images/architect.png"
function TopHeader(){
    return(

        <Container fluid className="headerCSS">
        <Row className="rowdimensions">
             <Col style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"3.5vh 5vh"}} md={6}><div style={{textAlign:"center", fontFamily:"Poppins"}}><h1 style={{fontWeight:"200"}}>Real Estate Measuring and Drafting Services</h1><h4 style={{color:"#ED4C67", fontWeight:"bold", marginBottom:"3vh"}}>Home sales increase 55% with a well drafted floorplan.</h4><h7 style={{fontWeight:"500"}}>The as-built floorplans we create have dozens of uses including home sales, interior-designing, renovations e.t.c. Get a completely <b>free</b> custom quote for our services by contacting us now! </h7><br></br><Button className='buttonClass' href="/quote" variant="success">Free Quote</Button></div></Col>
             <Col style={{display:"flex", justifyContent:"center", alignItems:"center", padding:"3.5vh 0px"}} md={6}><img className="headerImage"src={imageOne} alt="architect"></img></Col>
        </Row>

        </Container>


    )
}

export default TopHeader;
