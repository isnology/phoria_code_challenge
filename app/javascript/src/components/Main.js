import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  SignIn  from './signin/SignIn'
import Shop from './shop/Shop'
import Order from './order/Order'


export default function Main({ app }) {
  
  return (
    <Router>
      <Switch>
  
        <Route path='/' exact render={ () => (
          <Shop app={app} />
        )}/>
        
        <Route path='/signin' exact render={ () => (
          <SignIn app={app} />
        )}/>
        
        <Route path='/order' exact render={ () => (
          <Order app={app} />
        )}/>
      
      </Switch>
    </Router>
  )
}