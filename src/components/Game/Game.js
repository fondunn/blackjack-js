import React, {useState} from 'react'
import NavContainer from '../NavContainer/NavContainer'
import Table from '../Table/Table'
import './style.scss'
import { suits, values } from '../../default/cardProps'
import { } from '../../utils/deckUtils'


function Game() {
  const [players, setPlayers] = useState([])
  const [deck, setDeck] = useState([])
  const [test, setTest] = useState(0)

  const createDeck = () => {
    console.log(test)
    setTest(2)
    console.log(test)
  }

  return (
    <div className="game">
        <h1>I am BlackjackR</h1>
        <NavContainer createDeck={createDeck}/>
        <Table />
    </div>
  )
}

export default Game