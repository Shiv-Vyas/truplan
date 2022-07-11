import React from "react";
import {Container} from "react-bootstrap"
import sampleTwo from "./images/sampletwo.jpg"

function SampleTwo(){
return(
<Container className="sampleMargin" fluid>
<img src={sampleTwo} alt="sample" className="sampleImageLarge">

</img>

</Container>
)
}

export default SampleTwo;