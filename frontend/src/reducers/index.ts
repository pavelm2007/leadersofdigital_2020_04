import {combineReducers} from 'redux'
import auth from './auth'
import message from './message'
import page from './page'
import vacancy from './vacancy'

export const rootReducer = combineReducers({
  auth,
  message,
  page,
  vacancy
})


export type RootState = ReturnType<typeof rootReducer>