import React, { useState } from "react";

const Settings = (props) => {
  const { sports, toggleSelectedSport } = props;

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
    <div>
      {checkedSports}
    </div>
  );
};

export default Settings;
