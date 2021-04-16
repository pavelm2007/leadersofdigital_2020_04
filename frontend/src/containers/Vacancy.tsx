import React, {useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RootState} from '../reducers'
import {setPage} from '../actions/page'
import withPrivateLayout from '../hoc/withProvateLayout'
import useFetchDetailService from '../hooks/useFetchDetailService'
import VacancyService from '../services/vacancy.service'
import {RouteComponentProps} from 'react-router-dom'
import {VacancyListCard, VacancyTabs} from '../components/vacancies'


const mapState = ({auth}: RootState) => ({
  auth: auth
})

const mapDispatch = {
  setPage
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type TParams = { vacancyId: string };
type Props = PropsFromRedux & RouteComponentProps<TParams> & {}

export const Vacancy = (props: Props) => {
  const {setPage} = props
  const {vacancyId} = props.match.params
  const {data} = useFetchDetailService(VacancyService, parseInt(vacancyId))

  useEffect(() => {
    const title = !!data.title ? truncate(data.title) : data.title
    setPage({
      title: 'Вакансии',
      breadcrumbs: [{to: '/', title: 'Главная'}, {to: '/vacancies', title: 'Вакансии'}, {
        to: '',
        title: title
      }]
    })
  }, [data])
  const truncate = (input: string) => input.length > 5 ? `${input.substring(0, 25)}...` : input

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          {data !== null && <VacancyListCard {...data}/>}
        </div>
      </div>

      <VacancyTabs vacancyId={parseInt(vacancyId)} />
    </React.Fragment>

  )
}

export default connector(withPrivateLayout(Vacancy))
