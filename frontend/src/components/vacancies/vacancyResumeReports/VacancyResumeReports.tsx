import React, {useEffect, useState} from 'react'
import ResumeService from '../../../services/resume.service'
import {TResumeReportItem} from '../../../types'

enum ETab {
  find = 'find',
  resumes = 'resumes',
  resume = 'resume'
}


interface IVacancyTabsProps {
  vacancyId: number
  isMain?: boolean
}

export const VacancyResumeReports = ({vacancyId, isMain = false}: IVacancyTabsProps) => {
  const [resumeReports, setResumeReports] = useState<Array<TResumeReportItem>>([])

  const fetchFindResume = () => {
    return ResumeService.resumeList(1)
      .then(data => {
        if (isMain) {
          setResumeReports(data.slice(0, 3))
        } else {
          setResumeReports(data)
        }
      })
      .catch(e => e)
  }

  useEffect(() => {
    fetchFindResume()
  }, [])

  const renderResumeReportItem = (item: number | boolean | null) => {
    let icon = ''
    switch (item) {
      case -1:
        icon = 'mdi-close'
        break
      case null:
        icon = 'mdi-minus'
        break
      case true:
        icon = 'mdi-check'
        break
    }

    let result = (<React.Fragment>{item}</React.Fragment>)
    if (item === null || item === -1) result = (<span><i className={`mdi ${icon}`}/></span>)
    return result
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="card">
            <table className="table">
              <thead>
              <tr>
                <th style={{verticalAlign: 'top'}} scope="col">ФИО</th>
                <th style={{verticalAlign: 'top'}} scope="col">Соответствие резюме, %</th>
                <th style={{verticalAlign: 'top'}} scope="col">Первый созвон</th>
                <th style={{verticalAlign: 'top'}} scope="col">Результат тестового задания</th>
                <th style={{verticalAlign: 'top'}} scope="col">Результат собеседования</th>
                <th style={{verticalAlign: 'top'}} scope="col">Приглашение на работу</th>
              </tr>
              </thead>
              <tbody>

              {resumeReports
                .map((item, i) => (
                  <tr key={item.id}>
                    <td>{item.fio}</td>
                    <td style={{verticalAlign: 'middle'}}>{renderResumeReportItem(item.compliance)}</td>
                    <td style={{verticalAlign: 'middle'}}>{renderResumeReportItem(item.firstCall)}</td>
                    <td style={{verticalAlign: 'middle'}}>{renderResumeReportItem(item.testResult)}</td>
                    <td style={{verticalAlign: 'middle'}}>{renderResumeReportItem(item.interviewResult)}</td>
                    <td style={{verticalAlign: 'middle'}}>{renderResumeReportItem(item.jobInvitation)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </React.Fragment>

  )
}

