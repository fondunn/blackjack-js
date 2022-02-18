import React, {useState} from 'react'

function ScoreCouner() {

  const [counter, setCouner] = useState(0)

  return (
    <div>Score: {counter}</div>
  )
}

export default ScoreCouner