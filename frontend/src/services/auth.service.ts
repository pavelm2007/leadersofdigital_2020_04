import axios from 'axios'
import {LoginTypes, RegisterTypes} from './types'

const API_URL = 'http://localhost:8080/api/auth/'

class AuthService {
  login({username, password}: LoginTypes) {
    return axios
      .post(API_URL + 'signin', {username, password})
      .then(r => {
        if (r.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(r.data))
        }
        return r.data
      })
  }

  logout() {
    localStorage.removeItem('user')
  }

  register({username, email, password}: RegisterTypes) {
    return axios.post(API_URL + 'signup', {
      username,
      email,
      password
    })
  }
}

export default new AuthService()
