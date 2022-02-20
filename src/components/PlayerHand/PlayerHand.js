import React from 'react'
import './style.scss'

import Card from '../Card/Card'


function PlayerHand({ playerCards, playerTotal }) {

  console.log(playerTotal)
  return (
    <div className="player-hand">
        {/* <Card /> */}
        {playerCards.map((card, idx) => 
          <Card suit={card.card.suits} value={card.card.value}/>
        )}
        <span className="card-total">Total: {playerTotal}</span>
    </div>
  )
}

export default PlayerHand