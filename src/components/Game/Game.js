import React, {useState, useEffect} from 'react'
import './style.scss'

import InfoContainer from '../InfoContainer/InfoContainer'
import TableContainer from '../TableContainer/TableContainer'
import ButtonsContainer from '../ButtonsContainer/ButtonsContainer'
import Modal from '../Modal/Modal'

function Game() {

  const [gameStarted, setGameStarted] = useState(false)
  const [deck, setDeck] = useState([])
  const [activePlayer, setActivePlayer] = useState(0)
  const [gamePlayers, setGamePlayers] = useState([])
  const [deckLength, setDeckLength] = useState(0)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    console.log('ComponentDidMount: Game')
    console.log(`gameStarted: ${gameStarted}`)
    console.log('deck',deck)
    console.log(`gamePlayers`, gamePlayers)
    console.log(`winner is `, winner)
    console.log('active player', activePlayer);
  }, [deck, gamePlayers, gameStarted, setWinner, activePlayer])
  return (
    <div className="game">
      <InfoContainer activePlayer={activePlayer} gamePlayers={gamePlayers} gameStarted={gameStarted}/>

      <TableContainer
        gamePlayers={gamePlayers}
      />
      <ButtonsContainer 
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        setDeck={setDeck}
        setGamePlayers={setGamePlayers}
        setActivePlayer={setActivePlayer}
        gamePlayers={gamePlayers}
        setDeckLength={setDeckLength}
        setWinner={setWinner}
      />
      <Modal winner={winner} setWinner={setWinner} setGameStarted={setGameStarted}/>
    </div>
  )
}

export default Game