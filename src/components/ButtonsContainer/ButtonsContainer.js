import React from 'react'
import Button from '../Button/Button'

import './style.scss'


function ButtonsHandler({createDeck}) {
  return (
    <div className="btn-container">
        <Button title='Start' createDeck={createDeck}/>
        <Button title='More' />
        <Button title='Stay' />
    </div>
  )
}

export default ButtonsHandler