import React, { Component, Fragment } from 'react'
import Header from '../shared/Header'
import {Link, Redirect} from 'react-router-dom'
import Orders from './Orders'


export default class Order extends Component {
  
  app = this.props.app
  
  render() {
    return (
      <div className="order" >
        <Header>
          <Link to="/shop" className="btn btn--navbar btn--react-link" >
            Back
          </Link>
        </Header>
        <Orders app={this.app} page={this} />
      </div>
    )
  }
}