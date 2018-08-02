import api, { csrf } from './init'


export function shopIndex() {
  csrf()
  return api.post('/api/v1/shop')
  .then((res) => {
    return res.data.shop
  })
}

export function shopShow(id) {
  csrf()
  return api.post(`/api/v1/shop/${id}`)
  .then((res) => {
    return res.data.shop
  })
}