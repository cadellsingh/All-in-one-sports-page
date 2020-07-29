import React, { useState } from 'react';
import './App.css';
import SidebarSports from './SidebarSports';

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

  return (
    <div>
      <SidebarSports />
    </div>
  )
}

export default App;
