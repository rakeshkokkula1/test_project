import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Test Project</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
