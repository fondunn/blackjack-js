import React, {useEffect} from 'react'
import Player from '../Player/Player'
import './style.scss'

const players = 4

function PlayersContainer() {
  return (
    <div className="players-container">
       <Player />
    </div>
  )
}

export default PlayersContainer