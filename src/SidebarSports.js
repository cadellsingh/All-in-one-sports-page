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

  const entries = Object.entries(selectedSports);
  const displaySports = [];
  for (const [sport, isSelected] of entries) {
    displaySports.push(
      isSelected && (
        <li key={sport} onClick={(event) => getSport(sport)}>
          {sport}
        </li>
      )
    );
  }

  return (
    <div>
      {displaySports}
      <Settings
        sports={selectedSports}
        toggleSelectedSport={toggleSelectedSport}
      />
    </div>
  )
  
};

export default SidebarSports;
