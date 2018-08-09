import React, { Component, Fragment } from 'react'


export default function OrderHeader({ app, page, order }) {
  return(
    <div className="order_header">
      <p>Order Number: {order.id}</p>
      <p>Date: {order.date}</p>
      <p>Discount: {Math.round((1 - order.discount) * 100)}%</p>
      <p>Shipping: ${order.shipping_cents/100}</p>
    </div>
  )
}