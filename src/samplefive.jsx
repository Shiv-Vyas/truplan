import React from "react";
import {Container} from "react-bootstrap"
import sampleFive from "./images/samplefive.jpg"

function SampleFive(){
return(
<Container className="sampleMargin" fluid>
<img src={sampleFive} alt="sample" className="sampleImageLarge">

</img>

</Container>
)
}

export default SampleFive;