import {SET_PAGE} from '../actions/types'
import {ReducerActionTypes} from './types'

const initialState = {title: '', breadcrumbs: []}


export default function (state = initialState, action: ReducerActionTypes) {
  const {type, payload} = action

  switch (type) {
    case SET_PAGE:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}
