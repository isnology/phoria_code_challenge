import React, { Component, Fragment } from 'react'
import Button from '../shared/Button'
import {Link, Redirect} from 'react-router-dom'

export default function Card({ app, card }) {
  
  function onClick() {
  
  }
  
  return (
    <div className="shop_window_card">
      <p>{card.name}</p>
      <p>{card.quality}</p>
      <p>{card.price_cents/100}</p>
    
      <Button onClick={onClick} >Add to Cart</Button>
    </div>
  )
}