import {LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS} from '../actions/types'
import {ReducerActionTypes} from './types'


const user = localStorage.getItem('user') ? JSON.parse(localStorage['user']) : ''

const initialState = user
  ? {isLoggedIn: true, user}
  : {isLoggedIn: false, user: null}


export default function (state = initialState, action: ReducerActionTypes) {
  const {type, payload} = action

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user
      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    default:
      return state
  }
}
