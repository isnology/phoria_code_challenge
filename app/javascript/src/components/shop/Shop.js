import React, { Component, Fragment } from 'react'
import {Link} from 'react-router-dom'
import Header from '../shared/Header'
import Cards from './Cards'
import Footer from './Footer'
import ShoppingCart from '../shoppingCart/ShoppingCart'
import { cartCreate } from "../../api/cart"
import _cloneDeep from 'lodash-es/cloneDeep'


export default class Shop extends Component {
  
  app = this.props.app
  
  onClick = () => {
    this.app.setState({displayCart: true})
    this.app.onLoadCart()
  }
  
  onAddCart = (card, index) => {
    const cart = {
      item_id: card.id,
      quantity: parseInt(this.app.state.cards[index].quantity, 10),
    }
    cartCreate(cart)
    .then((carts) => {
      const shopCarts = _cloneDeep(carts)
      this.app.setState(prevState => {
        let cards = prevState.cards
        cards[index].quantity = 1
        return {carts, cards, shopCarts }
    })})
  }
  
  onQuantityChange = (index, event) => {
    const value = event.target.value
    this.app.setState(prevState => {
      let cards = prevState.cards
      cards[index].quantity = parseInt(value, 10) ? parseInt(value, 10) : 0
      return {cards}
    })
  }
  
  
  render() {
  
    const display = this.app.state.displayCart
    return (
      <div className="shop">
        <Header>
          { this.app.signedIn() &&
            <div className="btn btn--navbar" onClick={ this.app.onSignOut }>
              Sign Out
            </div>
          }
          { this.app.signedIn() &&
            <Link to="/order" className="btn btn--navbar btn--react-link" onClick={ this.app.onLoadOrder }>
              My Orders
            </Link>
          }
          { this.app.signedIn() && !display &&
            <div className="btn btn--navbar" onClick={ this.onClick }>
              Shopping Cart
            </div>
          }
          { !this.app.signedIn() &&
            <Link to="/signin" className="btn btn--navbar btn--react-link" >
              Sign In
            </Link>
          }
        </Header>
        <div className="shop_window">
          <Cards app={ this.app } page={ this }/>
        </div>
        <Footer/>
        <ShoppingCart app={ this.app }/>
      </div>
    )
  }
}