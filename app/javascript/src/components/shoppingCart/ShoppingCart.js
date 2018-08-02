import React, { Component, Fragment } from 'react'
import {Link, Redirect} from 'react-router-dom'
import CartHeader from './CartHeader'
import Carts from './Carts'


export default function ShoppingCart({ app }) {
  if (!app.signedIn()) {return (<Redirect to="/" />)}
  
  return (
    <Fragment>
    { app.state.displayCart &&
      <div className="cart">
        <CartHeader app={ app }/>
        <div className="cart_window">
          <Carts app={ app }/>
        </div>
      </div>
    }
    </Fragment>
  )
}