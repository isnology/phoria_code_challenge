import api, { csrf } from './init'


export function profileShow(id) {
  csrf()
  return api.get(`/v1/profiles/${id}`)
  .then((res) => {
    return res.data.profile
  })
}

export function profileCreate(data) {
  csrf()
  return api.post('/v1/profiles', data)
  .then((res) => {
    return res.data.profile
  })
}

export function profileUpdate(id, data) {
  csrf()
  return api.put(`/v1/profiles/${id}`, data)
  .then((res) => {
    return res.data.profile
  })
}
