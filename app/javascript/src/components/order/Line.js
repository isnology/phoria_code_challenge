import React from 'react'


export default function Line({ app, page, index, line, discount }) {
  const extended = line.price_cents * parseFloat(line.quantity)
  const disc = extended * discount
  const gst = disc * app.state.tax.rate
  return (
    <tr className="order_lines">
      <td>{index + 1}<p hidden>line.id</p></td>
      <td>{line.item.name}</td>
      <td>{line.item.quality}</td>
      <td className="right4">{line.quantity}</td>
      <td className="right2">${(line.price_cents/100).toFixed(2)}</td>
      <td className="right4">${(extended /100).toFixed(2)}</td>
      <td className="right4">${(disc/100).toFixed(2)}</td>
      <td className="right2">${(gst/100).toFixed(2)}</td>
      <td className="right2">${((gst + disc)/100).toFixed(2)}</td>
    </tr>
  )
}