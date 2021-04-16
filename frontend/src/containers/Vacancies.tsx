import React, {useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {Link} from 'react-router-dom'
import {RootState} from '../reducers'
import {setPage} from '../actions/page'
import withPrivateLayout from '../hoc/withProvateLayout'
import {VacancyListCard} from '../components/vacancies'
import useFetchListService from '../hooks/useFetchListService'
import VacancyService from '../services/vacancy.service'



const mapState = ({auth}: RootState) => ({
  auth: auth
})

const mapDispatch = {
  setPage
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

export const Vacancies = (props: Props) => {
  const {data} = useFetchListService(VacancyService)
  useEffect(() => {
    props.setPage({
      title: 'Вакансии',
      breadcrumbs: [{to: '/', title: 'Главная'}, {to: '/vacancies', title: 'Вакансии'}]
    })
  })
  return (
    <div className="row">
      <div className="col-12 d-flex no-block align-items-center m-b-25">
        <div className="ml-auto text-right">
          <Link className="btn btn-success btn-sm" to={'/vacancies/create'}>Создать</Link>
        </div>
      </div>
      <div className="col-md-12">
        {data.map(item => <VacancyListCard key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default connector(withPrivateLayout(Vacancies))
