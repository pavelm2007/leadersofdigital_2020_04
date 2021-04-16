import {useEffect, useState} from 'react'
import {IVacancyItem, TVacancyItem} from '../types'
import {TVacancyService} from '../services/vacancy.service'
import {fetchStatus} from './enums'

const useFetchListService = (api: TVacancyService, id: number) => {
  const [data, setData] = useState<TVacancyItem>({} as any)
  const [status, setStatus] = useState(fetchStatus.init)

  const fetchApi = () => {
    setStatus(fetchStatus.loading)
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json; charset=utf-8');

    return api.detail(id)
      .then(data => {
        setData(data)
        setStatus(fetchStatus.loaded)
      })
      .catch(error => setStatus(fetchStatus.error))

  }

  useEffect(() => {
    fetchApi().then()
  }, [])

  return {
    data,
    status,
    fetchApi
  }
}

export default useFetchListService
