import React from 'react'

function Button({title, startGame}) {
  return (
    <button onClick={startGame}>{title}</button>
  )
}

export default Button