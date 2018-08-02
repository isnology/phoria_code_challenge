import api, { csrf } from './init'


export function orderIndex() {
  csrf()
  return api.get('/api/v1/order')
  .then((res) => {
    return res.data.order
  })
}

export function orderShow(id) {
  csrf()
  return api.get(`/api/v1/order/${id}`)
  .then((res) => {
    return res.data.order
  })
}

export function orderCreate(data) {
  csrf()
  return api.post('/api/v1/order', data)
  .then((res) => {
    return res.data.order
  })
}

export function orderUpdate(id, data) {
  csrf()
  return api.put(`/api/v1/order/${id}`, data)
  .then((res) => {
    return res.data.order
  })
}
