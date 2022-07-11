import React from "react";
import {Container} from "react-bootstrap"
import sampleSix from "./images/samplesix.jpg"

function SampleSix(){
return(
<Container className="sampleMargin" fluid>
<img src={sampleSix} alt="sample"className="sampleImageLarge">

</img>

</Container>
)
}

export default SampleSix;