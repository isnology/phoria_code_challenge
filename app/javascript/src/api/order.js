import api, { csrf } from './init'


export function orderIndex() {
  csrf()
  return api.get('/v1/orders')
  .then((res) => {
    return res.data.orders
  })
}

export function orderShow(id) {
  csrf()
  return api.get(`/v1/orders/${id}`)
  .then((res) => {
    return res.data.order
  })
}

// order is created from carts table (nothing to pass)
export function orderCreate() {
  csrf()
  return api.post('/v1/orders')
  .then((res) => {
    return res.data.order
  })
}

export function orderUpdate(id, data) {
  csrf()
  return api.put(`/v1/orders/${id}`, data)
  .then((res) => {
    return res.data.order
  })
}
