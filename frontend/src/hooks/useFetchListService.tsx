import {useEffect, useState} from 'react'
import {IVacancyItem} from '../components/vacancies'
import {TVacancyService} from '../services/vacancy.service'
import {fetchStatus} from './enums'

type TListData = IVacancyItem[]
const initData = new Array()


const useFetchListService = (api: TVacancyService) => {
  const [service, setService] = useState(api)
  const [data, setData] = useState<TListData>(initData)
  const [status, setStatus] = useState(fetchStatus.init)

  const fetchApi = () => {
    setStatus(fetchStatus.loading)
    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json; charset=utf-8');

    return api.list()
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
