import React, { Component, Fragment } from 'react'
import {Link, Redirect} from 'react-router-dom'


export default function CartHeader({ app, page  }) {
  return (
    <div className="cart_header">
      <h1 className="cart_header-close" onClick={page.onCloseCart}>X</h1>
      <h2 className="cart_header-heading">Shopping Cart</h2>
    </div>
  )
}