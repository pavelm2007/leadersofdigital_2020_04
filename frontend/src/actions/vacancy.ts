import {AVacancy} from './types'

import {Dispatch} from 'redux'
import {TVacancyFormData} from '../types'
import VacancyService from '../services/vacancy.service'

export const createVacancy = (vacancyData: TVacancyFormData) => (dispatch: Dispatch) => {
  return VacancyService.create(vacancyData).then(
    (data) => {
      dispatch({
        type: AVacancy.create,
        payload: data
      })
      return Promise.resolve(data)
    },
    (error) => {
      return Promise.reject()
    }
  )
}

