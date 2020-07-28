import React, { useState } from 'react'
import SelectSports from './SelectSports'

// contains all the sports
// going to maintain state -> selected or not selected
// if selected, display to screen

const sports = {
  "NBA": true,
  "NFL": true,
  "MLB": true,
  "Hockey": true,
  "College Football": true,
  "College Basketball": true,
  "Soccer": true
}

const SidebarSports = () => {
  // const [isSelected, setIsSelected] = useState(true)
  // const [sportsData] = useState("")
  const [selectedSports, setSelectedSports] = useState(sports)

  // const changeSelectedSports = () => {
  //   setIsSelected(false)
  // }

  return (
    <SelectSports sports={selectedSports} />
  )
}

export default SidebarSports

// possibly put useEffects in a handle button click
// or
// when sport is selected and goes to different component, that component takes sport as prop and fetches data
// so the actual sport data will be in the other (child) component