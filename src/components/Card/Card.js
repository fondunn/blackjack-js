import React from 'react'
import './style.scss'

function Card({ suit, value }) {
  return (
    <div className="card">
        <div className="card-value">{value} {suit}</div>
        <div className="card-plate"></div>
        
    </div>
  )
}

export default Card