import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'https://customer-list-api.herokuapp.com'
  })
}
