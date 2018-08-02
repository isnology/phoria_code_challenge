import React, { Component, Fragment } from 'react'
import Cart from './Cart'


export default function Carts({ app }) {
  
  return (
    <Fragment>
      {app.state.carts.map((value, index) => (
        <Cart key={index} app={ app } />
      ))}
    </Fragment>
  )
}