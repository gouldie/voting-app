import axios from 'axios'

export const auth = () => {
  return axios
    .get('/api/user')
    .then(res => {
      return {user: res.data}
    })
    .catch(err => {
      return {err: err}
    })
}