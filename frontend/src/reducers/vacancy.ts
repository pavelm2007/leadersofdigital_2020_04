import {AVacancy} from '../actions/types'
import {ReducerActionTypes} from './types'


const initialState = {
  vacancy: {
    id: null,
    specialty: null,
    level: [],
    typeWork: [],
    experience: null,
    duties: [],
    requirements: [],
    conditions: [],
    skills: [],
    stack: []
  }
}


export default function (state = initialState, action: ReducerActionTypes) {
  const {type, payload} = action

  switch (type) {
    case AVacancy.create:
      return {
        ...state,
        vacancy: {...payload}
      }
    default:
      return state
  }
}
