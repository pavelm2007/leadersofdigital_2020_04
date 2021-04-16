import React from 'react'
import Moment from 'react-moment'
import {Link} from 'react-router-dom'
import {IVacancyItem} from '../../../types'

interface IVacancyListCard extends IVacancyItem {
  isMain?: boolean
}

const VacancyListCard = ({id, title, description, created, skills, isMain = false}: IVacancyListCard) => {

  const renderFullCounters = () => {
    return (
      <React.Fragment>
        <span>Кандидатов <span className={'badge badge-danger'}>55</span> </span>
        <span className={'m-l-15'}>Первый созвон <span className={'m-l-5 badge badge-warning'}>45</span> </span>
        <span className={'m-l-15'}>Результат тестового задания <span className={'m-l-5 badge badge-secondary'}>35</span> </span>
        <span className={'m-l-15'}>Результат собеседования <span className={'m-l-5 badge badge-primary'}>15</span> </span>
        <span className={'m-l-15'}>Приглашение на работу <span className={'m-l-5 badge badge-success'}>2</span> </span>

      </React.Fragment>
    )
  }

  const renderLightCounter = () => {
    return (
      <React.Fragment>
        <span className={'badge badge-danger'}>55</span>
        <span className={'m-l-5 badge badge-warning'}>45</span>
        <span className={'m-l-5 badge badge-secondary'}>35</span>
        <span className={'m-l-5 badge badge-primary'}>15</span>
        <span className={'m-l-5 badge badge-success'}>2</span>
      </React.Fragment>
    )
  }

  return (
    <div className={'card vacancy_card'}>
      <div className="card-body">
        <div className="comment-widgets">
          <div className="d-flex flex-row comment-row m-t-0 hover_off">
            <div className="comment-text w-100">
              <Link className="vacancy_card__title font-medium" to={`/vacancies/${id}`}>{title}</Link>
              {!isMain && (<span className="m-b-15 d-block">{description} </span>)}
              {!!skills && (<span className="m-b-15 d-block"><b>{skills.join(', ')}</b></span>)}
              <div className="comment-footer">
                <span className="text-muted float-right"><Moment date={created} format="DD.MM.YYYY"/></span>
                {isMain ? renderLightCounter() : renderFullCounters()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VacancyListCard