import React, {useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {RouteComponentProps, useHistory} from 'react-router-dom'
import {RootState} from '../reducers'
import {setPage} from '../actions/page'
import {createVacancy} from '../actions/vacancy'
import withPrivateLayout from '../hoc/withProvateLayout'
import {VacancyForm} from '../components/forms'
import {TVacancyFormData} from '../types'


const mapState = ({auth, vacancy}: RootState) => ({
  auth: auth,
  vacancy: vacancy


})

const mapDispatch = {
  setPage,
  createVacancy
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type TParams = { vacancyId?: string };
type Props = PropsFromRedux & RouteComponentProps<TParams> & {}

export const VacancyEdit = (props: Props) => {
  const history = useHistory()
  useEffect(() => {
    props.setPage({
      title: 'Создать вакансию',
      breadcrumbs: [{to: '/', title: 'Главная'}, {to: '/vacancies', title: 'Вакансии'}, {
        to: '/vacancies/create',
        title: 'Создать вакансию'
      }]
    })
  })

  const handleSubmit = (formData: TVacancyFormData) => {
    props.createVacancy(formData).then((d) => {
      const path = !!props.vacancy.vacancy.id ? `/vacancies/${props.vacancy.vacancy.id}` : `/vacancies`
      history.push(path)
    })
  }

  return (
    <div className="row">
      <div className="col-md-8">
        <VacancyForm onSubmit={(d)=>handleSubmit(d)}/>
      </div>
    </div>
  )
}

export default connector(withPrivateLayout(VacancyEdit))
