import React from 'react'
import Button from '../Button/Button'

import './style.scss'

function startGame() {
  console.log('start game')
}

function ButtonsHandler() {
  return (
    <div className="btn-container">
        <Button title='Start' startGame={startGame}/>
        <Button title='More' />
        <Button title='Stay' />
    </div>
  )
}

export default ButtonsHandler