import {SET_PAGE} from './types'
import {Dispatch} from 'redux'
import {IPage} from '../types'

export const setPage = (payload: IPage) => (dispatch: Dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload
  })
}
