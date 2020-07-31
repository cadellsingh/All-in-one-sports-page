import React, { useState } from "react";
import Settings from "./Settings";

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
        <li key={sport} onClick={(event) => getSport(sport)}>
          {sport}
        </li>
      )
    );
  }

  return (
    <div>
      {displaySelectedSports}
      <Settings
        sports={selectedSports}
        toggleSelectedSport={toggleSelectedSport}
      />
    </div>
  )
  
};

export default SidebarSports;
