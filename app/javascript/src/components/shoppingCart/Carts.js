import React, { Component, Fragment } from 'react'
import Cart from './Cart'
import Button from '../shared/Button'


export default function Carts({ app, page }) {
  let price = 0
  let sell = 0
  let discount = 0
  let tax = 0
  const shipping = app.state.shippingCents
  
  return (
    <Fragment>
      { app.state.carts.map((cart, index) => {
          price += cart.item.price_cents * app.state.shopCarts[index].quantity
          sell = price * app.state.discount
          discount = price - sell
          tax = sell * app.state.tax.rate
          return (
            <Cart key={index} app={app} page={page} index={index} cart={cart}/>
          )
      })}
      
      <div className="cart_window_card-bottom">
        <div className="cart_window_card">
          <div className="line-rel" >
            <div className="col-1">Total Sell Price</div>
            <div className="col-2">${(sell/100).toFixed(2)}</div>
          </div>
          { discount !== 0 &&
            <div className="line-rel">
              <div className="col-1">Total Discount</div>
              <div className="col-2">${ (discount / 100).toFixed(2) }</div>
            </div>
          }
          <div className="line-rel" >
            <div className="col-1">Total GST</div>
            <div className="col-2">${(tax/100).toFixed(2)}</div>
          </div>
          { shipping !== 0 &&
            <div className="line-rel">
              <div className="col-1">Shipping</div>
              <div className="col-2">${ (shipping / 100).toFixed(2) }</div>
            </div>
          }
          <div className="line-rel" >
            <div className="col-1">Grand Total</div>
            <div className="col-2">${((shipping + sell + tax)/100).toFixed(2)}</div>
          </div>
          <div className="line-bottom line-center" >
            <Button onClick={() => page.onPlaceOrder()}>Place Order</Button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}