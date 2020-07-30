import React, { useState } from "react";
import "./App.css";
import SidebarSports from "./SidebarSports";
import Settings from "./Settings";
import SportsData from "./SportsData";

// cmd + shift + l for console.log

const allSports = {
  NBA: true,
  NFL: true,
  MLB: true,
  NHL: true,
  "College Football": true,
  "College Basketball": true,
  Soccer: true,
};

const App = () => {
  const [selectedSports, setSelectedSports] = useState(allSports);
  const [sportToFetch, setSportToFetch] = useState("");
  const [displaySettings, setDisplaySettings] = useState(false);

  // Callback functions
  // select/deselect which sport user wants to view
  const toggleSelectedSport = (sport) => {
    setSelectedSports((prevState) => {
      const updatedSports = { ...prevState };
      updatedSports[sport] = !prevState[sport];
      return updatedSports;
    });
  };

  const getSport = (sport) => {
    setSportToFetch(sport);
    setDisplaySettings(false);
  };

  const handleClick = () => {
    setDisplaySettings((prevState) => !prevState);
  };

  return (
    <div>
      <SidebarSports sports={selectedSports} getSport={getSport} />
      <h1 onClick={handleClick}>Settings</h1>
      {displaySettings ? (
        <Settings
          sports={selectedSports}
          toggleSelectedSport={toggleSelectedSport}
        />
      ) : (
        <SportsData sport={sportToFetch} />
      )}
    </div>
  );
};

export default App;