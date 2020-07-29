import React, { useState } from 'react'

const SportsData = (props) => {
  const { sport } = props

  // when sport is undefined, fetch all data ?

  return (
    <div>
      {sport}
    </div>
  )
}

export default SportsData