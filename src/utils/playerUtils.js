export let activePlayer = 0
export let players = []
export let playersCount = 4

export const createPlayer = () => {
    for (let i = 0; i < playersCount; i++) {
        players.push({
            playerId: i,
            playerHand: [],
            playerPoints: 0
        })
    }
}

export const setActivePlayer = (x = 0) => {
    activePlayer = players[x].playerId
}

export const getActivePlayer = () => {
    return players.find(p => p.playerId === activePlayer)
}

export const nextPlayer = () => {
    const nextPlayerIndex = activePlayer + 1
    if(nextPlayerIndex > players.length - 1) {
        throw new Error('Players end')
    }
    setActivePlayer(nextPlayerIndex)
}

export const setCard = (card) => {
    players[activePlayer].playerHand.push({ card })
    players[activePlayer].playerPoints += card.weight
}

export const resetPlayers = () => {
    activePlayer = 0
    players = []
}