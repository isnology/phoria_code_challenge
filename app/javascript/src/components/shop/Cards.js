import React, { Component, Fragment } from 'react'
import Card from './Card'


export default function Cards({ app }) {
  
  return (
    <Fragment>
      {app.state.cards.map((value, index) => (
        <Card key={index} app={ app } card={ value }/>
      ))}
    </Fragment>
  )
}