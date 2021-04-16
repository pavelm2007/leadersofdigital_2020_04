import {CLEAR_MESSAGE, SET_MESSAGE} from '../actions/types'
import {ReducerActionTypes} from './types'

const initialState = {}

export default function (state = initialState, action: ReducerActionTypes) {
  const {type, payload} = action

  switch (type) {
    case SET_MESSAGE:
      return {message: payload}

    case CLEAR_MESSAGE:
      return {message: ''}

    default:
      return state
  }
}
