import api, { csrf } from './init'


export function cartIndex() {
  csrf()
  return api.get('/api/v1/cart')
  .then((res) => {
    return res.data.cart
  })
}

export function cartShow(id) {
  csrf()
  return api.get(`/api/v1/cart/${id}`)
  .then((res) => {
    return res.data.cart
  })
}

export function cartCreate(data) {
  csrf()
  return api.post('/api/v1/cart', data)
  .then((res) => {
    return res.data.cart
  })
}

export function cartUpdate(id, data) {
  csrf()
  return api.put(`/api/v1/cart/${id}`, data)
  .then((res) => {
    return res.data.cart
  })
}

export function cartDelete(id) {
  csrf()
  return api.deletet(`/api/v1/cart/${id}`)
  .then((res) => {
    return res.data.cart
  })
}