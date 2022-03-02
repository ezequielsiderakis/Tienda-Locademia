import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap"
import CartWidget from "./CartWidget/carrito.png"



export default function NavBar ({arrayDeLink}){
    return(
        <>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Tienda Locademia</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Tienda Online</Nav.Link>
        <Nav.Link href="#link">Sobre Nosotros</Nav.Link>
        <Nav.Link href="#link">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )


}   