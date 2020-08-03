import React, { useState } from "react";
import Settings from "./Settings";
import Col from "react-bootstrap/Col";

const allSports = {
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  "College Football": true,
  "College Basketball": true,
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
        <ul className="selectedSports">
          <li key={sport} onClick={(event) => getSport(sport)}>
            <span className="text">{sport}</span>
          </li>
        </ul>
      )
    );
  }

  return (
    <Col lg={3} xl={3} md={3} className="sidebar">
      <h1>All in one - Sports</h1>
      {displaySelectedSports}
      <Settings
        sports={selectedSports}
        toggleSelectedSport={toggleSelectedSport}
      />
    </Col>
  );
};

export default SidebarSports;
