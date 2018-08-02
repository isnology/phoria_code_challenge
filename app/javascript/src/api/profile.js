import api, { csrf } from './init'


export function profileShow(id) {
  csrf()
  return api.get(`/api/v1/profile/${id}`)
  .then((res) => {
    return res.data.profile
  })
}

export function profileCreate(data) {
  csrf()
  return api.post('/api/v1/profile', data)
  .then((res) => {
    return res.data.profile
  })
}

export function profileUpdate(id, data) {
  csrf()
  return api.put(`/api/v1/profile/${id}`, data)
  .then((res) => {
    return res.data.profile
  })
}
