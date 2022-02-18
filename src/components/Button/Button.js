import React from 'react'

function Button({title, createDeck}) {
  return (
    <button onClick={createDeck}>{title}</button>
  )
}

export default Button