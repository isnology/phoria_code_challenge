import api, { csrf } from './init'


export function cartIndex() {
  csrf()
  return api.get('/v1/cart')
  .then((res) => {
    return res.data.carts
  })
}

export function cartShow(id) {
  csrf()
  return api.get(`/v1/cart/${id}`)
  .then((res) => {
    return res.data.carts
  })
}

export function cartCreate(data) {
  csrf()
  return api.post('/v1/cart', data)
  .then((res) => {
    return res.data.carts
  })
}

export function cartUpdate(id, data) {
  csrf()
  return api.put(`/v1/cart/${id}`, data)
  .then((res) => {
    return res.data.cart
  })
}

export function cartDelete(id) {
  csrf()
  return api.delete(`/v1/cart/${id}`)
  .then((res) => {
    return res.data.carts
  })
}