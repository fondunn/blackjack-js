import React from 'react'
import './style.scss'

import PlayersContainer from '../PlayersContainer/PlayersContainer'

function TableContainer({ gamePlayers }) {
  return (
    <div className="table-container">
        <PlayersContainer playersInfo={gamePlayers}/>
    </div>
  )
}

export default TableContainer