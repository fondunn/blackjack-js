export const createDeck = (suits, values, deck) => {
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

export const getWeight = (value) => {
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

export const shuffleDeck = (deck) => {
    let randomT = deck.map((item, index) => {
        return {
            i: index,
            value: Math.random()
        }
    }).sort((a, b) => a.value - b.value)
    deck = randomT.map(({ i }) => deck[i])
}

export const getCard = (deck) => {
    deck.pop()
}

export const reset = (deck) => {
    deck = []
}