import React, { useState } from "react";

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
      <h3 onClick={handleClick}>Settings</h3>
      {displaySettings && checkedSports}
    </div>
  );
};

export default Settings;
