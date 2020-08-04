import React, { useState } from "react";
import Settings from "./Settings";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

const allSports = {
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  NCAAF: true,
  NCAA: true,
};

// move all sports back up to APP Component

const SidebarSports = (props) => {
  const { getSport } = props;
  const [selectedSports, setSelectedSports] = useState(allSports);

  // select/deselect which sport user wants to view
  const toggleSelectedSport = (sport) => {
    setSelectedSports((prevState) => {
      const updatedSports = { ...prevState };
      updatedSports[sport] = !prevState[sport];
      return updatedSports;
    });
  };

  // displays selected sports
  const entries = Object.entries(selectedSports);
  const displaySelectedSports = [];
  for (const [sport, isSelected] of entries) {
    displaySelectedSports.push(
      isSelected && (
        <Nav.Item
          className="ml-auto"
          as="li"
          key={sport}
          onClick={(event) => getSport(sport)}
        >
          <Nav.Link>{sport}</Nav.Link>
        </Nav.Item>
      )
    );
  }

  // see if you can work in NavBar
  // try to have settings all the way to the right possibly

  return (
    <Container fluid className="navbar">
      <Navbar>
        <Nav className="container-fluid">
          <Nav.Item><Navbar.Brand>All in one</Navbar.Brand></Nav.Item>
          <Nav.Item>
            <Settings
              sports={selectedSports}
              toggleSelectedSport={toggleSelectedSport}
            />
          </Nav.Item>
          {displaySelectedSports}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default SidebarSports;
