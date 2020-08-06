import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const allSports = {
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  NCAAF: true,
  NCAA: true,
};

// move all sports back up to APP Component

const SportButtons = (props) => {
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
        <ListGroup.Item
          style={{ border: "none" }}
          key={sport}
          onClick={(event) => getSport(sport)}
        >
          <Button variant="outline-primary">{sport}</Button>
        </ListGroup.Item>
      )
    );
  }

  return (
    <Container className="sport-buttons">
      <Row className="justify-content-md-center">
        <ListGroup horizontal>{displaySelectedSports}</ListGroup>
      </Row>
    </Container>
  );
};

export default SportButtons;

// search bar in navbar
