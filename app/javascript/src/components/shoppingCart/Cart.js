import React, { Component, Fragment } from 'react'
import Button from '../shared/Button'
import Quantity from '../shared/Quantity'
import {Link, Redirect} from 'react-router-dom'

export default function Cart({ app, page, index, cart }) {
  
  const price = parseFloat(parseFloat(cart.item.price_cents/100 * app.state.shopCarts[index].quantity).toFixed(2))
  const sell = parseFloat(parseFloat(price * app.state.discount).toFixed(3))
  const discount = parseFloat(parseFloat(price - sell).toFixed(3))
  
  return (
    <div className="cart_window_card">
      <div className="line-rel" >
        <div className="col-1">{cart.item.name}</div>
        <div className="col-2">{cart.item.quality} Quality</div>
      </div>
      <div className="line-rel" >
        <div className="col-1">
          <Quantity passClass=" " page={page} index={index} quantity={app.state.shopCarts[index].quantity}/>
        </div>
        <div className="col-2">${price}</div>
      </div>
      { discount !== 0 &&
        <Fragment>
        <div className="line-rel" >
          <div className="col-1">Discount:</div>
          <div className="col-2">${discount}</div>
        </div>
        <div className="line-rel" >
          <div className="col-1">Sell Price:</div>
          <div className="col-2">${sell}</div>
        </div>
        </Fragment>
      }
      <div className="line-bottom line-center">
        <Button onClick={() => page.onRemoveCart(cart.id)}>Remove</Button>
      </div>
    </div>
  )
}
