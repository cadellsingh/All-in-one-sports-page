import React from 'react'

const SidebarSports = (props) => {
  const { sports } = props

  const entries = Object.entries(sports)
  const displaySports = []
  for (const [sport, isSelected] of entries) {
    displaySports.push(isSelected && <li key={sport}>{sport}</li>)
  }

  return (
    <div>
      {displaySports}
    </div>
  )
}

export default SidebarSports