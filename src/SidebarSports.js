import React, { useState } from 'react'
import Settings from './Settings'

const allSports = {
  "NBA": true,
  "NFL": true,
  "MLB": true,
  "Hockey": true,
  "College Football": true,
  "College Basketball": true,
  "Soccer": true
}

const SidebarSports = () => {
  const [selectedSports, setSelectedSports] = useState(allSports)
  const [displaySettings, setdisplaySettings] = useState(false)

  const handleClick = () => {
    setdisplaySettings(prevState => !prevState)
  }

  const toggleSelectedSport = (sport) => {
    setSelectedSports(prevState => {
      const updatedSports = { ...prevState }
      updatedSports[sport] = !prevState[sport]
      return updatedSports
    })
  }

  // null here can be the main component with the data
  // and prob re-name displayComponent
  const displayComponent = displaySettings ?
    <Settings
      sports={selectedSports}
      toggleSelectedSport={toggleSelectedSport}
    />
    : null

  const entries = Object.entries(selectedSports)
  const displaySports = []
  for (const [sport, isSelected] of entries) {
    displaySports.push(isSelected && <li key={sport}>{sport}</li>)
  }

  return (
    <div>
      {displaySports}
      <h1 onClick={handleClick}>Settings</h1>
      {displayComponent}
    </div>
  )
}

export default SidebarSports

// possibly put useEffects in a handle button click
// or
// when sport is selected and goes to different component, that component takes sport as prop and fetches data
// so the actual sport data will be in the other (child) component