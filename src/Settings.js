import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";

// do i even need a settings feature ?


const Settings = (props) => {
  const { sports, toggleSelectedSport } = props;
  const [displaySettings, setDisplaySettings] = useState(false);

  const handleClick = () => {
    setDisplaySettings((prevState) => !prevState);
  };

  const entries = Object.entries(sports);
  const checkedSports = [];
  for (const [sport, checked] of entries) {
    checkedSports.push(
      <label key={sport}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => toggleSelectedSport(sport)}
        />{" "}
        {sport}
      </label>
    );
  }

  return (
    <div className="settings">
      <Navbar.Brand onClick={handleClick}>Settings</Navbar.Brand>
      {displaySettings && checkedSports}
    </div>
  );
};

export default Settings;
