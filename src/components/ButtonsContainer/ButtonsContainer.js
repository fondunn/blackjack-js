import React from 'react'
import './style.scss'

import Button from '../Button/Button'

import { createDeck, deck, shuffleDeck, getCard, resetDeck } from '../../utils/deckUtils'
import { createPlayer, players, setCard, activePlayer, getActivePlayer, nextPlayer, resetPlayers } from '../../utils/playerUtils'

function ButtonsContainer({
  setGameStarted,
  setDeck,
  setGamePlayers,
  gamePlayers,
  setDeckLength,
  setActivePlayer,
  setWinner,
  gameStarted }) {

  const startBtn = () => {
    setGameStarted(true)
    createDeck()
    shuffleDeck()
    createPlayer()
    setGamePlayers(players)
    setActivePlayer(activePlayer)


    const card = getCard()
    const deckLen = deck.length
    setDeck(deck)
    setCard(card)
    setDeckLength(deckLen)
    setGamePlayers(players)
    check()
  }
  const hitBtn = () => {
    try {
      check()
      const card = getCard()
      const deckLen = deck.length
      setDeck(deck)
      setCard(card)
      setDeckLength(deckLen)
      setGamePlayers(players)
      check()
    } catch (e) {
      console.log('error with hit button');
    }
  }

  const standBtn = () => {
    try {
      check()
      nextPlayer()
      const card = getCard()
      const deckLen = deck.length
      setDeck(deck)
      setCard(card)
      setDeckLength(deckLen)
      setGamePlayers(players)
      const activePlayer = getActivePlayer()
      setActivePlayer(activePlayer.playerId)
      check()
    } catch (e) {
      winner()
      endGame()
    }
  }

  function check() {
    const activePlayer = getActivePlayer()
    if (activePlayer.playerPoints > 21) {
      try {
        console.log('before nextPlayer : ', activePlayer)
        nextPlayer()
        const activePlayer1 = getActivePlayer()
        console.log('after nextPlayer() : ', activePlayer1); /// ???
        setActivePlayer(activePlayer1)
        // setActivePlayer(activePlayer)  //??? 
        const card = getCard()
        const deckLen = deck.length
        setCard(card)
        setDeckLength(deckLen)
        setGamePlayers(players)

      } catch (e) {
        winner()
        endGame()
      }
    }
  }

  function endGame() {
    console.log('endgame function run...')
    winner()
    resetDeck()
    resetPlayers()
    setGamePlayers(players)
    setActivePlayer(0)
    setDeckLength(0)
  }

  function winner() {
    let winner = null;
    let winnerPoints = 0
    for (let i = 0; i < players.length; i++) {
      if (players[i].playerPoints > winnerPoints && players[i].playerPoints <= 21) {
        winnerPoints = players[i].playerPoints
        winner = players[i].playerId
      }
    }
    if (!winnerPoints) {
      setWinner('No winner')
    } else {
      setWinner(winner)
    }
  }

  return (
    <div className='btn-container'>
      {
        !gameStarted
          ?
          <Button title='start game' handlerBtn={startBtn} />
          : <div className='btn-control'>
            <Button title='Hit' btnStyle='hit' handlerBtn={hitBtn} />
            <Button title='Stand' btnStyle='stand' handlerBtn={standBtn} />
          </div>
      }
    </div>
  )
}

export default ButtonsContainer