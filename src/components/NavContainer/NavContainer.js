import React from 'react'
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer'
import ScoreCouner from '../ScoreCounter/ScoreCouner'

import './style.scss'

function NavContainer() {
  return (
    <div className="nav-container">
        <ButtonsContainer />
        <ScoreCouner />
    </div>
  )
}

export default NavContainer