import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_SERVER_URL,
  withCredentials: true
})

// function getMetaContent () {
//   const metaTags = document.getElementsByTagName('meta')
//   return metaTags[1].content
// }

export function csrf () {
  axios.defaults.headers.common['X-CSRF-Token'] = Rails.csrfToken()  // getMetaContent()
}

export default api
