import React, { Component, Fragment } from 'react'
import Line from './Line'


export default function OrderLines({ app, page, order }) {
  let total = 0
  let totalext = 0
  const gstRate = 1 + app.state.tax.rate
  let shippingWithGst = order.shipping_cents * gstRate
  const shippingGst = order.shipping_cents * app.state.tax.rate
  let gstTotal = shippingWithGst
  
  return(
    <Fragment>
      {order.lines.map((line, index) => {
        total += parseFloat(line.quantity)
        totalext = parseFloat(line.quantity) * line.price_cents * order.discount
        gstTotal += totalext * gstRate
        return (
        <Line key={ index } app={ app } page={ page } index={index} line={ line } discount={order.discount}/>
      )})}
      { order.shipping_cents !== 0 &&
        <Fragment>
          <tr>
            <td>.</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${ order.shipping_cents / 100 }</td>
            <td></td>
            <td></td>
            <td>${Math.round(shippingGst/100)}</td>
            <td>${Math.round(shippingWithGst/100)}</td>
          </tr>
        </Fragment>
      }
      <tr>
        <td>.</td>
      </tr>
      <tr>
        <td>Totals</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>${Math.round(gstTotal/100)}</td>
      </tr>
    </Fragment>
  )
}