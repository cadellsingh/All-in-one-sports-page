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
  Hockey: true,
  "College Football": true,
  "College Basketball": true,
  Soccer: true,
};

const App = () => {
  const [selectedSports, setSelectedSports] = useState(allSports);
  const [sportToFetch, setSportToFetch] = useState("");
  const [displaySettings, setDisplaySettings] = useState(true);

  // Callback functions
  // select/deselect which sport you want to view
  const toggleSelectedSport = (sport) => {
    setSelectedSports((prevState) => {
      const updatedSports = { ...prevState };
      updatedSports[sport] = !prevState[sport];
      return updatedSports;
    });
  };

  const getSport = (sport) => {
    setSportToFetch(sport);
  };

  const handleClick = () => {
    setDisplaySettings((prevState) => !prevState);
  };

  // could prob put setDisplaySettings in getSport event handler

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

// settings and main component will be taking a prop -> whether or not to display component

// possibly put useEffects in a handle button click
// or
// when sport is selected and goes to different component, that component takes sport as prop and fetches data
// so the actual sport data will be in the other (child) component
