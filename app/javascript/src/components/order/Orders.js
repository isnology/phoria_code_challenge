import React from 'react'
import OrderFull from './OrderFull'


export default function Orders({ app, page }) {
  return(
    <div className="order_list">
      {app.state.orders.map((order, index) => (
        <OrderFull key={index} app={app} page={page} index={index} order={order}/>
      ))}
    </div>
  )
}
