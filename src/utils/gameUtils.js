import { createDeck, shuffleDeck, resetDeck } from "./deckUtils"
import { 
    nextPlayer, 
    createPlayer, 
    getActivePlayer, 
    resetPlayers } from "./playerUtils"

export const startGame = () => {
    createDeck()
    shuffleDeck()
    createPlayer()
}

export const endGame = () => {
    restartGame()
}

export const stay = () => {
    try{
        nextPlayer()
    }catch(e) {
        endGame()
    }
}

export const check = () => {
    const activePlayer = getActivePlayer()
    if(activePlayer.playerPoints > 21) {
        try {
            nextPlayer()
        }catch(e) {
            endGame()
        }
    }
}

export function restartGame() {
    resetPlayers()
    resetDeck()
}