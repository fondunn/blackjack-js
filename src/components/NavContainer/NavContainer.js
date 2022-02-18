import React from 'react'
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer'
import ScoreCouner from '../ScoreCounter/ScoreCouner'

import './style.scss'

function NavContainer({createDeck}) {
  return (
    <div className="nav-container">
        <ButtonsContainer createDeck={createDeck}/>
        <ScoreCouner />
    </div>
  )
}

export default NavContainer