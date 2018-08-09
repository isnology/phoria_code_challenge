import React from 'react'
import OrderHeader from './OrderHeader'
import OrderLines from './OrderLines'


export default function OrderFull({ app, page, order }) {
  return(
    <div className="order_full">
      <OrderHeader app={app} page={page} order={order}/>
      <table className="order_table no-spacing">
        <thead>
          <tr>
            <th>Line #</th>
            <th>Item</th>
            <th>Quality</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Price X Quantity</th>
            <th>With Discount</th>
            <th>GST</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <OrderLines  app={app} page={page} order={order} />
        </tbody>
      </table>
    </div>
  )
}