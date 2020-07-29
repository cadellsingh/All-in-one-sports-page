import React, { useState } from 'react'

const Settings = (props) => {
  const { sports, toggleSelectedSport } = props
  const [displaySettings, setdisplaySettings] = useState(false)

  const handleClick = () => {
    setdisplaySettings(prevState => !prevState)
  }

  const entries = Object.entries(sports)

  // change inputs variable name
  const sportsChecked = []
  for (const [sport, checked] of entries) {
    sportsChecked.push(
      <label key={sport}>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => toggleSelectedSport(sport)}
        /> {sport}
      </label>
    )
  }

  return (
    <div>
      <h1 onClick={handleClick}>Settings</h1>
      {displaySettings && sportsChecked}
    </div>
  )
}

export default Settings