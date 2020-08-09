import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const TopNavbar = () => {
  return (
    <Container fluid className="navbar-container">
      <Row>
        <div className="content-container">
          <Navbar variant="dark">
            <Navbar.Brand>All in one</Navbar.Brand>
            <Nav>
              <Nav.Link>News</Nav.Link>
              <Nav.Link>Scores</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </Row>
    </Container>
  );
};

export default TopNavbar;
