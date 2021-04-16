import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import withPrivateLayout from '../hoc/withProvateLayout'
import {RootState} from '../reducers'
import {setPage} from '../actions/page'
import {connect, ConnectedProps} from 'react-redux'
import useFetchListService from '../hooks/useFetchListService'
import VacancyService from '../services/vacancy.service'
import {Notifications} from '../components/noptifications'
import {VacancyResumeReports} from '../components/vacancies'

const mapState = ({auth}: RootState) => ({})
const mapDispatch = {setPage}
const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}

export const Home = ({setPage}: Props) => {
  const vacancies = useFetchListService(VacancyService)
  useEffect(() => {
    setPage({title: '', breadcrumbs: []})
  }, [])

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <table className="table">
              <thead>
              <tr>
                <th style={{verticalAlign: 'top'}} scope="col">Вакансия</th>
                <th style={{verticalAlign: 'top'}} scope="col">Навыки</th>
              </tr>
              </thead>
              <tbody>
              {vacancies.data
                .map((item, i) => (
                  <tr key={item.id}>
                    <td><Link to={`vacancies/${item.id}`}>{item.title}</Link></td>
                    <td>{!!item.skills ? item.skills.join(', ') : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Notifications/>
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title m-b-0">Работа с кандидатами</h4>
            </div>
            <VacancyResumeReports vacancyId={1} isMain={true}/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default connector(withPrivateLayout(Home))
