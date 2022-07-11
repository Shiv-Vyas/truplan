import React from 'react';
import {Carousel, Button} from 'react-bootstrap';
import imageOne from "./images/commercial.jpg"
import imageTwo from "./images/residential.jpg"
import imageThree from "./images/industrial.jpg"


function CarouselHouse(){

    return (
     
<Carousel fade>

<Carousel.Item>
  <img                                                
    className="d-block imageCarousel"
    src={imageTwo}
    alt="Second slide"
  />
      <div className="coverCarousel"></div>
  <Carousel.Caption className="captionCarousel">
    <h3 className="headingCarousel">Residential Floorplans</h3>
    <h6 className='paraCarousel'>We measure and draft floorplans of residential homes for renovations or home sales.</h6>
<Button size="md" variant="light" href="/sampleone" className='buttonClass'>Sample</Button> 
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<div className="coverCarousel"></div>
  <img className="d-block imageCarousel"
    src={imageOne}
    alt="First slide"
  />
      
  <Carousel.Caption  className="captionCarousel">
    <h3 className="headingCarousel" >Commercial Floorplans</h3>
    <h6 className="paraCarousel">Commercial floorplans are important for space management and renovations. </h6>
   <Button size="md" variant="light" href="/samplefive" className='buttonClass'>Sample</Button>
  </Carousel.Caption>

</Carousel.Item>
<Carousel.Item>
<div className="coverCarousel"></div>
  <img
    className="d-block imageCarousel"
    src={imageThree}
    alt="Third slide"
  />
     
  <Carousel.Caption  className="captionCarousel">
    <h3 className="headingCarousel" >Industrial Floorplan</h3>
    <h6 className="paraCarousel">We also measure factories and warehouses over 100,000 square feet.</h6>
    <Button size="md" variant="light" href="/samplesix" className='buttonClass'>Sample</Button>
  </Carousel.Caption>
  
</Carousel.Item>
</Carousel>

    )
}

export default CarouselHouse;