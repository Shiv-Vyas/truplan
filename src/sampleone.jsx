import React from "react";
import {Container} from "react-bootstrap"
import sampleOne from "./images/sampleone.jpg"

function SampleOne(){
return(
<Container className="sampleMargin" fluid>
<img src={sampleOne} alt="sample" className="sampleImageLarge">

</img>

</Container>
)
}

export default SampleOne;