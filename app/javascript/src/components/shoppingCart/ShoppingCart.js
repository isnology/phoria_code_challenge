import React, { Component, Fragment } from 'react'
import {Link, Redirect} from 'react-router-dom'
import CartHeader from './CartHeader'
import Carts from './Carts'
import { cartDelete, cartUpdate } from "../../api/cart"
import { orderCreate } from "../../api/order"
import _cloneDeep from 'lodash-es/cloneDeep'


export default class ShoppingCart extends Component {
  
  app = this.props.app
  
  onRemoveCart = (id) => {
    this.doUpdates()
    cartDelete(id)
    .then((carts) => {
      const shopCarts = _cloneDeep(carts)
      this.app.setState({carts, shopCarts})
  })}
  
  onQuantityChange = (index, event) => {
    const value = event.target.value
    let shopCarts = this.app.state.shopCarts
    shopCarts[index].quantity = parseInt(value, 10) ? parseInt(value, 10) : 0
    this.app.setState({ shopCarts })
    this.app.doPromotion(shopCarts)
  }
  
  onCloseCart = () => {
    this.doUpdates()
    this.app.setState({displayCart: false})
  }
  
  doUpdates = () => {
    this.app.state.carts.map((cart, index) => {
      if (cart.quantity !== this.app.state.shopCarts[index].quantity) {
        let quantity = _cloneDeep(this.app.state.shopCarts[index].quantity)
        cartUpdate(cart.id, this.app.state.shopCarts[index])
        .then((acart) => {
          this.app.doPromotion(this.app.state.shopCarts)
          this.app.setState(prevState => {
            let carts = prevState.carts
            carts[index].quantity = quantity
            return(carts)
          })
        })
      }
    })
  }
  
  onPlaceOrder = () => {
    this.doUpdates()
    orderCreate()
    .then((res) => {
      this.app.onLoadCart()
      this.app.setState({displayCart: false})
  })}
  
  
  render() {
    if (!this.app.signedIn()) {return (<Redirect to="/" />)}
    
    return (
      <Fragment>
        { this.app.state.displayCart &&
        <div className="fullscreen">
          <div className="cart">
            <CartHeader app={ this.app } page={ this }/>
            <div className="cart_window">
              <Carts app={ this.app } page={ this }/>
            </div>
          </div>
        </div>
        }
      </Fragment>
  )}
}