import React, {useEffect} from 'react'
import {connect, ConnectedProps} from 'react-redux'
import {Bar, BarChart, CartesianGrid, Legend, RadialBar, RadialBarChart, Tooltip, XAxis} from 'recharts'
import withPrivateLayout from '../hoc/withProvateLayout'
import {RootState} from '../reducers'
import {setPage} from '../actions/page'


const mapState = ({auth}: RootState) => ({})
const mapDispatch = {setPage}
const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {}


export const Reports = ({setPage}: Props) => {

  useEffect(() => {
    setPage({
      title: 'Отчеты',
      breadcrumbs: [{to: '/', title: 'Главная'}, {to: '/reports', title: 'Отчеты'}]
    })
  }, [])
  const rnd = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const spec = ['Ведущий аналитик', 'Системный администратор', '3D-дизайнер', 'Тестировщик ПО', 'Интернет-маркетолог']
  const closingQualityData = spec.map(
    (x, i) => {
      return {name: x, response: rnd(20, 50)}
    }
  )
  const closingDays = new Array(30)
  const closingDayData = closingDays.map(
    (x, i) => {
      const closing = i < 20 ? rnd(5, 20) : 0
      return {name: i, closing: closing}
    }
  )

  const dataRadius = [
    {name: '5-10%', uv: 31.47, pv: 2400, fill: '#8884d8'},
    {name: '4-10%', uv: 26.69, pv: 4567, fill: '#83a6ed'},
    {name: '3-40%', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
    {name: '87%', uv: 8.22, pv: 9800, fill: '#82ca9d'}
  ]

  const style = {
    top: 0,
    left: 350,
    lineHeight: '24px'
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Закрытые вакансии</h5>
              <div className="table-responsive">
                <div id="zero_config_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4">
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div id="zero_config_filter" className="dataTables_filter">
                        <label className={'d-flex'}>Поиск:<input type="search"
                                                                 className="form-control form-control-sm m-l-10"/></label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table id="zero_config" className="table table-striped table-bordered dataTable" role="grid"
                             aria-describedby="zero_config_info">
                        <thead>
                        <tr role="row">
                          <th className="sorting_asc">Вакансия</th>
                          <th className="sorting">Количество откликов</th>
                          <th className="sorting">Скорость закрытия, дней</th>
                          <th className="sorting">Качество закрытия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                          ['Ведущий аналитик', 'Системный администратор', '3D-дизайнер', 'Тестировщик ПО'].map(
                            (x, i) => (
                              <tr role="row" className={`${i % 2 ? 'odd' : ''}`} key={i}>
                                <td className="sorting_1">{x}</td>
                                <td>{rnd(10, 55)} </td>
                                <td>{rnd(5, 15)}</td>
                                <td>{rnd(1, 5)}</td>
                              </tr>
                            )
                          )
                        }
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-5"/>
                    <div className="col-sm-12 col-md-7">
                      <div className="dataTables_paginate paging_simple_numbers" style={{float: 'right'}}>
                        <ul className="pagination">
                          <li className="paginate_button page-item previous disabled" id="zero_config_previous"><a
                            href="#" aria-controls="zero_config" data-dt-idx="0"
                            className="page-link">&#60;</a></li>
                          {[1, 2, 3, 4, 5].map(x => (
                            <li key={x} className={`paginate_button page-item ${x === 2 ? 'active' : ''}`}>
                              <span className={'page-link'}>{x}</span></li>
                          ))}
                          <li className="paginate_button page-item next" id="zero_config_next"><a href="#"
                                                                                                  aria-controls="zero_config"
                                                                                                  data-dt-idx="7"
                                                                                                  className="page-link">&#62;</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title m-b-0">Качество закрытия</h4>
              <RadialBarChart width={300} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10}
                              data={dataRadius}>
                <RadialBar label={{position: 'insideStart', fill: '#fff'}} background
                           dataKey='uv'/>
                <Legend iconSize={10} width={120} height={140} layout='horizontal' verticalAlign='bottom'
                        wrapperStyle={style}/>
              </RadialBarChart>
            </div>
          </div>
        </div>
        <div className={'col-md-8'}>
          <div className={'card'}>
            <div className={'card-body'}>
              <h5 className="card-title">Количество откликов</h5>
              <div className={'text-center'} style={{display: 'flex', justifyContent: 'center'}}>
                <BarChart
                  width={400}
                  height={300}
                  data={closingQualityData}
                  margin={{top: 5, right: 30, left: 20, bottom: 5}}
                  barSize={20}
                >
                  <XAxis dataKey="name" scale="point" padding={{left: 10, right: 10}}/>
                  <Tooltip/>
                  <CartesianGrid strokeDasharray="3 2"/>
                  <Bar label={true} dataKey="response" fill="#8884d8" background={{fill: '#eee'}}/>
                </BarChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default connector(withPrivateLayout(Reports))
