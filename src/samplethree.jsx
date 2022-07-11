import React from "react";
import {Container} from "react-bootstrap"
import sampleThree from "./images/samplethree.jpg"

function SampleThree(){
return(
<Container className="sampleMargin" fluid>
<img src={sampleThree} alt="sample" className="sampleImageLarge">

</img>

</Container>
)
}

export default SampleThree;