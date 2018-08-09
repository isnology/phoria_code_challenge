import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signIn, signUp } from '../../api/auth'
import Button from '../shared/Button'
import Header from '../shared/Header'


export default function SignIn({ app }) {

  function onFormClick(e) {
    e.preventDefault()
    const elements = e.target.elements
    const data = {
      user: {
        email: elements.email.value,
        password: elements.password.value
      }
    }
    if (app.state.toSignUp) {
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
    app.setState({ toSignUp: !app.state.toSignUp })
  }
  
  if (app.signedIn()) {return <Redirect to="/" />}
  
  const { toSignUp } = app.state
  
  return (
    <div className="signin">
      <Header>
        <Link to="/" className="btn btn--navbar btn--react-link" >
          Shop
        </Link>
      </Header>
      <div className="signin_window">
        <form onSubmit={onFormClick}>
          <div className="line-center">
          <label>
            {'Email: '}
            <input
                type='email'
                name='email'
                defaultValue=""
            />
          </label>
          </div>
          <div className="line-center">
          <label>
            {'Password: '}
            <input
                type='password'
                name='password'
                defaultValue=""
            />
          </label>
          </div>
          { toSignUp &&
            <div className="line-center">
            <label>
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
          <div className="line-center">
          <Button>Sign {toSignUp && 'Up'} {!toSignUp && 'In'}</Button>
          </div>
        </form>
        <Button onClick={ onClick }>{toSignUp && 'Back to Sign In'} {!toSignUp && 'Sign Up'}</Button>
      </div>
    </div>
  )

}

