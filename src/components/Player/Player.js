import React from 'react'
import './style.scss'

import PlayerHand from '../PlayerHand/PlayerHand'

function Player() {
  return (
    <div className="player">
        <h3>I am player</h3>
        <PlayerHand />
        <p>Player Score: 0</p>
    </div>
  )
}

export default Player