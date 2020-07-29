import React, { useState } from 'react';
import './App.css';
import SidebarSports from './SidebarSports';
import Settings from './Settings';

// possibly move state to this component
// and re-structure components like:
// SidebarSports
// Settings 
// MainData -> News / Scores

const allSports = {
  "NBA": true,
  "NFL": true,
  "MLB": true,
  "Hockey": true,
  "College Football": true,
  "College Basketball": true,
  "Soccer": true
}

const App = () => {
  const [selectedSports, setSelectedSports] = useState(allSports)

  const toggleSelectedSport = (sport) => {
    setSelectedSports(prevState => {
      const updatedSports = { ...prevState }
      updatedSports[sport] = !prevState[sport]
      return updatedSports
    })
  }

  return (
    <div>
      <SidebarSports
        sports={selectedSports}
      />
      <Settings
        sports={selectedSports}
        toggleSelectedSport={toggleSelectedSport}
      />
      {/* <MainComponentData/> */}
    </div>
  )
}

export default App;


// settings and main component will be taking a prop -> whether or not to display component

// possibly put useEffects in a handle button click
// or
// when sport is selected and goes to different component, that component takes sport as prop and fetches data
// so the actual sport data will be in the other (child) component