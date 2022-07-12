import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import imageOne from "./images/laserimage.png"
import imageTwo from "./images/experience.png"
import imageThree from "./images/mail.png"

function CardSection(){
    return(
        <div>
<Container fluid className='carddimensions'>
  <Row className='rowdimensions'>
    <Col  className='Col1' sm={12} md = {4}><h2 style={{fontFamily:"Poppins"}}>Precise Laser<br></br> Measurements</h2><div className='imageContainer'><img className="cardImage" src={imageOne} alt="laser"></img> </div><p>We invest in top of the line equipment because the <b>quality</b> of our floorplans is our main priority. Our on site surveyors use industry standard laser equipment when measuring properties to ensure <b>pixel perfect </b> measurements.</p><Button  size="lg" className="buttonClass" href="/equipment" variant='danger'>Learn More</Button></Col>

    <Col className='Col2' sm={12} md = {4}><h2 style={{fontFamily:"Poppins"}}>Two Decades<br></br> of Experience</h2><div className='imageContainer'><img className="cardImage2" src={imageTwo} alt="experience clipart"></img> </div><p>Our services of measuring and drafting real estate properties have been offered for the past two decades across Ontario. Through the years, Truplan has become the <b>trusted</b> first choice contractors<br></br> of hundreds of clients. Check out some of our samples:</p><Button size="lg" variant="danger" href="/samples" className='buttonClass'>Samples</Button></Col>

    <Col  className='Col3' sm={12} md = {4}><h2 style={{fontFamily:"Poppins"}} className='cardpadding'>Affordable and<br></br>Custom Pricing</h2><div className='imageContainer'><img className="cardImage3" src={imageThree} alt="mail"></img></div><p>Each property that we measure and draft gets a <b>custom</b> price based on multiple factors such as the square footage and type of property (e.g commercial and residential). Get a <br></br>completely <b>free</b> quote here!</p><Button size="lg" className="buttonClass" href="/quote" variant= 'success'>Free Quote</Button> </Col>
  </Row>

</Container>
</div> )
}
export default CardSection;