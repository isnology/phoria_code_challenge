import React, { Component, Fragment } from 'react'
import Button from '../shared/Button'
import Quantity from '../shared/Quantity'
import {cartCreate} from '../../api/cart'
import {Link, Redirect} from 'react-router-dom'
import {onAddCart} from './Shop'

export default function Card({ app, page, index, card }) {
  return (
  <div className="shop_window_card">
    <div className="line-center">
      <div className="shop_window_card-board"> </div>
    </div>
    <div className="line-center">
      <h3 className="shop_window_card-text">{card.name}</h3>
    </div>
    <div className="line-center">
      <h3 className="shop_window_card-text">{card.quality} Quality</h3>
    </div>
    <Quantity passClass="line-center" page={page} index={index} quantity={app.state.cards[index].quantity}/>
    <div className="line-center">
      <h3 className="shop_window_card-text"> ${(card.price_cents/100) * app.state.cards[index].quantity}</h3>
    </div>
    <div className="line-center">
      <Button onClick={() => page.onAddCart(card, index)} >Add to Cart</Button>
    </div>
  </div>
)}
