import {values, suits} from '../default/deck'

export let deck = []

export const createDeck = () => {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck = [
                ...deck,
                {
                    suits: suits[i],
                    value: values[j],
                    weight: getWeight(values[j])
                }
            ]
        }
    }
}
export const shuffleDeck = () => {
    let randomT = deck.map((item, index) => {
        return {
            i: index,
            value: Math.random()
        }
    }).sort((a, b) => a.value - b.value)
    deck = randomT.map(({ i }) => deck[i])
}

export function getWeight(value) {
    switch (value) {
        case 'J':
        case 'Q':
        case 'K':
            return 10
        case 'A':
            return 11
        default:
            return value
    }
}

export const getCard = () => {
    return deck.pop()
}

export const resetDeck = () => {
    deck = []
}