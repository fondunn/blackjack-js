import React from 'react'
import './style.scss'

import PlayerHand from '../PlayerHand/PlayerHand'

function PlayersContainer({ playersInfo }) {
  console.log('players from Hand component ',playersInfo);
  return (
    <div className="players-container">
        {/* <PlayerHand />
        <PlayerHand />
        <PlayerHand />
        <PlayerHand /> */}
        {playersInfo.map((player,idx) => 
          <PlayerHand playerCards={playersInfo[idx].playerHand} playerTotal={playersInfo[idx].playerPoints}/>
        )}

    </div>
  )
}

export default PlayersContainer