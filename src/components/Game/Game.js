import React, {useState} from 'react'
import NavContainer from '../NavContainer/NavContainer'
import Table from '../Table/Table'
import './style.scss'
import { suits, values } from '../../default/cardProps'


function Game() {
  const [players, setPlayers] = useState([])
  const [deck, setDeck] = useState([])


  return (
    <div className="game">
        <h1>I am BlackjackR</h1>
        <NavContainer />
        <Table />
    </div>
  )
}

export default Game