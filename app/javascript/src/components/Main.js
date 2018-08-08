import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import  SignInPage  from './SignInPage'
import Shop from './shop/Shop'
import Order from './order/Order'


export default function Main({ app }) {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path='/' exact render={ () => (
            <SignInPage app={app} />
          )}/>
          
          <Route path='/shop' exact render={ () => (
            <Shop app={app} />
          )}/>
  
          <Route path='/order' exact render={ () => (
            <Order app={app} />
          )}/>
        
        </Switch>
      </div>
    </Router>
  )
}