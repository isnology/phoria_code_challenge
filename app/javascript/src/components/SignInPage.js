import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { signIn, signUp } from '../api/auth'
import Button from './Button'


export default function SignInPage({ app }) {

  function onFormClick(e) {
    e.preventDefault()
    const elements = e.target.elements
    const data = {
      user: {
        email: elements.email.value,
        password: elements.password.value
      }
    }
    if (app.state.signUp) {
      data.user.password_confirmation = elements.passwordConfirmation.value
      return signUp(data)
      .then((res) => onSignIn(res))
    }
    else {
      return signIn(data)
      .then((res) => onSignIn(res))
    }

  }
  
  function onSignIn(data) {
    app.setState({ user: data })
  }

  function onClick() {
    app.setState({ signUp: !app.state.signUp })
  }
  
  if (app.signedIn()) {return <Redirect to="/app" />}
  
  const { signUp } = app.state
  
  return (
    <Fragment>
      <form onSubmit={onFormClick}>
        <div className="form-label">
        <label>
          {'Email: '}
          <input
              type='email'
              name='email'
              defaultValue=""
          />
        </label>
        </div>
        <div className="form-label">
        <label>
          {'Password: '}
          <input
              type='password'
              name='password'
              defaultValue=""
          />
        </label>
        </div>
        { signUp &&
          <div className="form-label">
          <label >
            {'Re-type Password: '}
            <input
                type='password'
                name='passwordConfirmation'
                defaultValue=""
            />
          </label>
          </div>
        }
        <br />
        <Button>Sign {signUp && 'Up'} {!signUp && 'In'}</Button>
      </form>
      <Button onClick={ onClick }>{signUp && 'Back to Sign In'} {!signUp && 'Sign Up'}</Button>
    </Fragment>
  )

}

