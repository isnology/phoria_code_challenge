import React, { Fragment } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { signIn, signUp } from '../../api/auth'
import Button from '../shared/Button'
import Header from '../shared/Header'
import Error from '../shared/Error'


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
    app.setState(() => {return {error: null}})
    if (app.state.toSignUp) {
      data.user.password_confirmation = elements.passwordConfirmation.value
      return signUp(data)
      .then((res) => onSignIn(res))
      .catch((error) => {
        if (/ 422/.test(error.message)) {
          app.setState(() => {return { error: { message: 'This user is already registered.' } }})
        }
        //throw error
      })
    }
    else {
      return signIn(data)
      .then((res) => onSignIn(res))
      .catch((error) => {
        if (/ 401/.test(error.message)) {
          app.setState(() => {return { error: { message: 'The email/password combination is incorrect.' } }})
        }
        //throw error
      })
    }

  }
  
  function onSignIn(data) {
    app.setState({ user: data })
  }

  function onClick() {
    app.setState({ toSignUp: !app.state.toSignUp, error: null })
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
      <Error app={app}/>
    </div>
  )

}

