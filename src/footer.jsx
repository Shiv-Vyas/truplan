import React from "react";
import {Col, Row, Container} from "react-bootstrap"
import logo from "./images/truplanbrand.png"


function Footer(){

return(


        <div className="footer">
              <Row style={{display:"flex", justifyContent:"Center", alignItems:"center", textAlign:"center"}}>
                <Col sm ={12}>
            <Container className="footerContain" >  
              
                    <a className="footerText" href="/contact"><h5>
                        Contact
                    </h5></a>
                    <a className="footerText" href="/samples"><h5>
                        Samples
                    </h5></a>
                    <a className="footerText"href="/quote">  <h5>
                        Free Quote
                    </h5></a>
                    <a className="footerText" href="/faq" >   <h5>
                        FAQ
                    </h5></a>
                
            </Container>
            </Col>
        
           
                <Col md={6}>
        
            <a href="/"><img src={logo} className="truplanlogo" alt="logo"></img></a>
     
            </Col>
            <Col md={6}>
               
                <p>Copyright © 2022 Truplan Inc. All rights reserved.</p>
              
               
            </Col>
            </Row>  
        </div>

)

}

export default Footer;