import React from 'react'
import './style.scss'

function Modal({winner, setWinner, setGameStarted}) {
    
    return (
    <div>
        {
        winner ? 
            <div className="modal-container">
                <div className="modal">
                <h1> Winner is Player: {winner + 1}</h1>
                <button onClick={() => {
                    setWinner(null) 
                    setGameStarted(false)
                    }}>Play Again</button>
                </div>
            </div>
            :
            ''
    }
    </div>
  )
}

export default Modal