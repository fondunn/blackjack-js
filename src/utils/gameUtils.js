export const gameStart = (deck) => {
    createDeck()
    shuffleDeck()
    createPlayer()
    renderPlayers()
}

export const gameInit = () => {

}

export const getCard = (card) => {
    getCard()
    setCard(card)
    renderCard(players)
    check()
}

export const check = () => {
    activePlayer = getActivePlayer(players)
    if (activePlayer.playerPoints > 21) {
        
    }
}