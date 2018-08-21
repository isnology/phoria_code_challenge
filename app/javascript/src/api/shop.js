import api, { csrf } from './init'


export function shopIndex() {
  csrf()
  return api.get('/v1/shops')
  .then((res) => {
    return res.data.shop
  })
}
