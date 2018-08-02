import React, { Component, Fragment } from 'react'
import {Link, Redirect} from 'react-router-dom'
import Header from '../shared/Header'
import Cards from './Cards'
import Bottom from './Bottom'
import ShoppingCart from '../shoppingCart/ShoppingCart'
import Button from '../shared/Button'


export default function Shop({ app }) {
  if (!app.signedIn()) {return (<Redirect to="/" />)}
  
  const display = app.state.displayCart
  
  function onClick() {
    app.setState({displayCart: !display})
  }
  
  return (
    <div className="shop">
      <Header>
        <div className="btn btn--navbar" onClick={app.onSignOut}>
          Sign Out
        </div>
        <div className="btn btn--navbar" onClick={onClick} >
          { display ? "Close Cart" : "Shopping Cart"}
        </div>
      </Header>
      <div className="shop_window">
        <Cards app={ app }/>
        <div className="shop_window_bottom-spacer"/>
        <Bottom/>
        <ShoppingCart app={app} />
      </div>
    </div>
  )
}