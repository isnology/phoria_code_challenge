import React from 'react'
import Button from '../shared/Button'
import Quantity from '../shared/Quantity'
import {onAddCart} from './Shop'
import image1 from '../../images/corrugated-board-1.jpg'
import image2 from '../../images/corrugated-board-2.jpg'

export default function Card({ app, page, index, card }) {
  return (
  <div className="shop_window_card">
    <div className="line-center">
      <img className="shop_window_card-img" src={card.image === 'corrugated-board-1.jpg' ? image1 : image2 } />
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
    {app.signedIn() &&
      <div className="line-center">
        <Button onClick={() => page.onAddCart(card, index)} >Add to Cart</Button>
      </div>
    }
  </div>
)}
