import React, { Component, Fragment } from 'react'
import { isSignedIn, signOut } from './api/auth'
import Main from './components/Main'
import shopIndex from '../api/auth/shop'
import {Link, Redirect} from 'react-router-dom'


export default class App extends Component {
  state = {
    user: true,
    toSignUp: false,
    cards: [1,2],
    carts: [1,2,3,4,5,6],
    displayCart: false,
  }
  
  signedIn = () => (!!this.state.user)
  
  ifSignedIn = () => {
    isSignedIn()
    .then((res) => {
      this.setState({ user: res.user })
    })
  }
  
  onSignOut = () => {
    signOut()
    .then((res) => {
      this.setState({ user: null })
    })
    .catch((error) => {
      //res.status(404).json(error)
      console.log("error:", error)
    })
  }
  
  onLoadShop = () => {
    shopIndex()
    .then((res) => {
      console.log("res.shop", res.shop )
      this.setState({ cards: res.data.shop})
    })
  }
  render() {
    return (
      <Main app={this} />
    )
  }
  
  componentDidMount() {
    this.ifSignedIn()
    this.onLoadShop()
  }
  
}
