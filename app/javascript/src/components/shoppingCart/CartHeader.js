import React, { Component, Fragment } from 'react'
import {Link, Redirect} from 'react-router-dom'


export default function CartHeader({ app }) {
  if (!app.signedIn()) {return (<Redirect to="/" />)}
  
  return (
    <div className="cart_header">
    
    </div>
  )
}