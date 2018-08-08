import React, { Component, Fragment } from 'react'


export default function Line({ app, page, index, line, discount }) {
  const extended = line.price_cents * parseFloat(line.quantity)
  const disc = extended * discount
  const gst = disc * app.state.tax.rate
  return (
    <tr className="order_lines">
      <td>{index + 1}<p hidden>line.id</p></td>
      <td>{line.item.name}</td>
      <td>{line.item.quality}</td>
      <td>{line.quantity}</td>
      <td>${line.price_cents/100}</td>
      <td>${(extended /100)}</td>
      <td>${disc/100}</td>
      <td>${gst/100}</td>
      <td>${(gst + disc)/100}</td>
    </tr>
  )
}