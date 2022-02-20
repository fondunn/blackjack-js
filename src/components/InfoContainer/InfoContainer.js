import React from 'react'
import './style.scss'
import Status from '../Status/Status'

function InfoContainer({ activePlayer, gamePlayers, gameStarted }) {
  return (
    <div className='info-container'>
      <Status activePlayer={activePlayer} gamePlayers={gamePlayers} gameStarted={gameStarted}/>
    </div>
  )
}

export default InfoContainer