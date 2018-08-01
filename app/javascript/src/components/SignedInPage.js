import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import Button from './Button'
import { signOut } from "../api/auth";


export default function SignedInPage({ app }) {
  if (!app.signedIn()) {return (<Redirect to="/" />)}
  
  function onSignOut() {
    signOut()
    .then((res) => {
      app.setState({ user: null })
    })
    .catch((error) => {
      //res.status(404).json(error)
      console.log("error:", error)
    })
  }
  
  return (
      <Fragment>
        <h2>Signed in</h2>
        <Button onClick={ onSignOut } >Sign Out</Button>
      </Fragment>
  )
}
