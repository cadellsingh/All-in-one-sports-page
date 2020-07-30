import React, { useState } from 'react'

const SportsData = (props) => {
  const { sport } = props

  // when sport is undefined, fetch all data ?

  return (
    <div>
      <p>{sport}</p>
      <p>test</p>
    </div>
  )
}

export default SportsData