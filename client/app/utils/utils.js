import axios from 'axios'

export const auth = () => {
    return axios.get('/api/auth')
        .then(res => {
            return {
                username: res.data
            }
        })
        .catch(err => {
            return {
                err: err
            }
        })
}