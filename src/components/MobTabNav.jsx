import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const MobTabNav = () => {
  return (
    <div className="mob-tab-nav">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Jet Freight</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/booking">Bookings</Nav.Link>
            <Nav.Link >User ABC</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MobTabNav;
