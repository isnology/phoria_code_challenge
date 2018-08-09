import React, { Fragment } from 'react'
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
          <tr className="space">
            <td>Shipping</td>
            <td></td>
            <td></td>
            <td></td>
            <td className="right2">${ (order.shipping_cents / 100).toFixed(2) }</td>
            <td></td>
            <td></td>
            <td className="right2">${Math.round(shippingGst/100).toFixed(2)}</td>
            <td className="right2">${Math.round(shippingWithGst/100).toFixed(2)}</td>
          </tr>
        </Fragment>
      }
      <tr className="space">
        <td>Total</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td className="right2">${Math.round(gstTotal/100).toFixed(2)}</td>
      </tr>
    </Fragment>
  )
}