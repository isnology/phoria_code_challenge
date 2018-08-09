import React, { Component } from 'react'
import { isSignedIn, signOut } from './api/auth'
import Main from './components/Main'
import { shopIndex } from './api/shop'
import { cartIndex } from './api/cart'
import { orderIndex } from './api/order'
import _cloneDeep from 'lodash-es/cloneDeep'


export default class App extends Component {
  state = {
    user: true,
    toSignUp: false,
    cards: [],
    promotions: [],
    tax: null,
    carts: [],
    discount: 1,
    shippingCents: 0,
    displayCart: false,
    shopCarts: [],
    orders: [],
  }
  
  signedIn = () => (!!this.state.user)
  
  ifSignedIn = () => {
    isSignedIn()
    .then((res) => {
      this.setState({ user: res.user })
    })
  }
  
  onSignOut = () => {
    signOut()
    .then((res) => {
      this.setState({ user: null })
    })
    .catch((error) => {
      //res.status(404).json(error)
      console.log("error:", error)
    })
  }
  
  onLoadShop = () => {
    shopIndex()
    .then((shop) => {
      shop.items.map((item) => {
        item.quantity = 1
      })
      this.setState({
        cards: shop.items,
        promotions: shop.promotions,
        tax: shop.tax,
      })
    })
  }
  
  onLoadCart = () => {
    return cartIndex()
    .then((carts) => {
      const shopCarts = _cloneDeep(carts)
      this.setState({carts, shopCarts})
      this.doPromotion(carts)
    })
  }
  
  doPromotion = (carts) => {
    let total = 0
    let result = null
    
    carts.map((cart, index) => {
      total += cart.quantity
    })
    if (!!this.state.promotions) {
      result = this.state.promotions.find( promo =>
        total > promo.quantity )
    }
    if (!!result) {
      this.setState({
        discount: result.discount,
        shippingCents: result.shipping_cents
      })
    } else {
      this.setState({discount: 1, shippingCents: 3000})
    }
  }
  
  onLoadOrder = () => {
    return orderIndex()
    .then((orders) => {
      this.setState({orders})
    })
  }
  
  render() {
    return (
      <Main app={this} />
    )
  }
  
  componentDidMount() {
    this.ifSignedIn()
    this.onLoadShop()
  }
  
}
// how to set state and continue once done.
// this.setState({ name: 'Kris' }, () => {
//   // prints 'Kris'
//   console.log(this.state.name);
// })