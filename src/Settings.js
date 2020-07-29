import React from 'react'

const Settings = (props) => {
  const { sports, toggleSelectedSport } = props
  const entries = Object.entries(sports)
  
  const inputs = []
  for (const [sport, checked] of entries) {
    inputs.push(
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
      {inputs}
    </div>
  )
}

export default Settings