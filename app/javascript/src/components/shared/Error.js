import React, {Fragment} from 'react'

export default function Error({ app }) {
  return (
    <Fragment>
      {!!app.state.error &&
        <div className="error">
          <p>{ app.state.error.message }</p>
        </div>
      }
    </Fragment>
  )
}