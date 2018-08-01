import React, { Component, Fragment } from 'react'
import { isSignedIn, signOut } from './api/auth'
import Main from './components/Main'


export default class App extends Component {
  state = {
    user: true,
    signUp: false,
  }
  
  signedIn = () => (!!this.state.user)
  
  ifSignedIn = () => {
    isSignedIn()
    .then((res) => {
      this.setState({ user: res.user })
    })
  }
  
  
  
  
  render() {
    return (
      <Main app={this} />
    )
  }
  
  componentDidMount() {
    this.ifSignedIn()
  }
  
}
