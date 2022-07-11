import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import logo from "./images/truplanbrand.png";

function NavBarHead(){
return(
<Navbar bg="light" expand="md">
  <Container fluid className='brandContainer'>
    <Navbar.Brand href="/"><img className='truplanlogo' alt="logo" src={logo}></img></Navbar.Brand>
    <Navbar.Toggle style={{marginRight:"5vh"}} aria-controls="basic-navbar-nav" />
    <Navbar.Collapse style={{textAlign:"center"}} id="basic-navbar-nav">
      <Nav className="ms-auto rightmargin">
      <Nav.Link style={{color:"#e84118", fontWeight:500, fontSize:"1.2rem", fontFamily:"Poppins"}} className = "navLink" href="/samples">Samples</Nav.Link>
        <Nav.Link style={{color:"#e84118", fontWeight:500, fontSize:"1.2rem", fontFamily:"Poppins"}} className = "navLink" href="/quote">Get A Quote</Nav.Link>
       
        <Nav.Link style={{color:"#e84118", fontWeight:500, fontSize:"1.2rem", fontFamily:"Poppins"}} className = "navLink" href="/contact">Contact</Nav.Link>
        <NavDropdown style={{textAlign:"center", fontFamily:"Poppins"}} className= "navLink" title="More" id="basic-nav-dropdown">
          <NavDropdown.Item style={{color:"#e84118"}}  href="/faq">FAQ</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item style={{color:"#e84118"}} href="/equipment">Our Equipment</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

)
}

export default NavBarHead;