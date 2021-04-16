import React from 'react'
import {Link} from 'react-router-dom'

export const Notifications = () => {

  // @ts-ignore
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title m-b-0">Уведомления</h4>
        </div>
        <ul className="list-style-none">
          <li className="d-flex no-block card-body">
            <i className="fa fa-check-circle w-30px m-t-5"/>
            <div>
              <div className="m-b-0 font-medium p-0">
                Новые кандидаты на вакансию <Link to={'/vacancies/1'}>Разработчик
                Front-end (REACT)</Link>
              </div>
            </div>
            <div className="ml-auto">
              <div className="tetx-right">
                <h5 className="text-muted m-b-0">20</h5>
                <span className="text-muted font-16">Ноя</span>
              </div>
            </div>
          </li>
          <li className="d-flex no-block card-body border-top">
            <i className="fa fa-plus w-30px m-t-5"/>
            <div>
              <Link to={'/vacancies/1'} className="m-b-0 font-medium p-0">Добавлены новые вакансии для обработки</Link>
            </div>
            <div className="ml-auto">
              <div className="tetx-right">
                <h5 className="text-muted m-b-0">19</h5>
                <span className="text-muted font-16">Ноя</span>
              </div>
            </div>
          </li>
          <li className="d-flex no-block card-body border-top">
            <i className="fa fa-check-circle w-30px m-t-5"/>
            <div>
              <div className="m-b-0 font-medium p-0">
                 Новые кандидаты на вакансию <Link to={'/vacancies/3'}>Тестировщик ПО</Link>
              </div>
            </div>
            <div className="ml-auto">
              <div className="tetx-right">
                <h5 className="text-muted m-b-0">20</h5>
                <span className="text-muted font-16">Ноя</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Notifications
