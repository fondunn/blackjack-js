import React from 'react'
import './style.scss'

function Button({title, btnStyle, handlerBtn}) {
  return (
    <button className={'game-btn ' + btnStyle} onClick={handlerBtn}>{title}</button>
  )
}

export default Button