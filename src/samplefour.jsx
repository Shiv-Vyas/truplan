import React from "react";
import {Container} from "react-bootstrap"
import sampleFour from "./images/samplefour.jpg"

function SampleFour(){
return(
<Container className="sampleMargin" fluid>
<img src={sampleFour} alt="sample" className="sampleImageLarge">

</img>

</Container>
)
}

export default SampleFour;