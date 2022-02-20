import React from 'react'
import './style.scss'
function Status({ activePlayer, gameStarted }) {
  // console.log('from status gamePlayers', gamePlayers[activePlayer].playerPoints);

  return (
    <div className='status'>
      <h2>Player {activePlayer + 1} turn</h2>
      {
        !gameStarted ? <p>Press Start Game Button</p> : ''
      }
    </div>
  )
}

export default Status