import React, { Component, Fragment } from 'react'
import Card from './Card'


export default function Cards({ app, page }) {
  return(
  <Fragment>
    {app.state.cards.map((value, index) => (
      <Card key={index} app={app} page={page} index={index} card={value}/>
    ))}
  </Fragment>
)}
