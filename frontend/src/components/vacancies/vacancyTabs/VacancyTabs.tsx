import React, {useEffect, useState} from 'react'
import ResumeService from '../../../services/resume.service'
import {TResumeItem, TResumeReportItem} from '../../../types'
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis} from 'recharts'
import {VacancyResumeReports} from '../index'

enum ETab {
  find = 'find',
  resumes = 'resumes',
  resume = 'resume'
}


interface IVacancyTabsProps {
  vacancyId: number
}

export const VacancyTabs = ({vacancyId}: IVacancyTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(ETab.find)
  const switchTabs = (tab: string) => setActiveTab(tab)
  const [resumeFinds, setResumeFinds] = useState<Array<TResumeItem>>([])
  const [resumeReports, setResumeReports] = useState<Array<TResumeReportItem>>([])
  const [graphData, setGraphData] = useState<any[]>([])

  const fetchResumeList = () => {
    return ResumeService.resumeList(1)
      .then(data => {
        const sorted = data.sort(function (a, b) {
          const x = a.compliance
          const y = b.compliance
          return ((x > y) ? -1 : ((x < y) ? 1 : 0))
        })
        setResumeReports(sorted)
        setGraphData(getGraphData(sorted))
      })
      .catch(e => e)
  }
  const fetchFindResume = () => {
    return ResumeService.find(1)
      .then(data => {
        setResumeFinds(data)
      })
      .catch(e => e)
  }

  useEffect(() => {
    fetchResumeList().then()
    fetchFindResume()
  }, [])

  const getGraphData = (items: TResumeReportItem[]) => {
    const data = {
      compliance: {name: '1', value: 0},
      firstCall: {name: '2', value: 0},
      testResult: {name: '3', value: 0},
      interviewResult: {name: '4', value: 0},
      jobInvitation: {name: '5', value: 0}
    }
    const result = items.map(item => {
      if (!!item.compliance && item.compliance > -1) data.compliance.value++
      if (!!item.firstCall && item.firstCall > -1) data.firstCall.value++
      if (!!item.testResult && item.testResult > -1) data.testResult.value++
      if (!!item.interviewResult && item.interviewResult > -1) data.interviewResult.value++
      if (item.jobInvitation === true) data.jobInvitation.value++
    })
    return [data.compliance, data.firstCall, data.testResult, data.interviewResult, data.jobInvitation]
  }

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

  // @ts-ignore
  return (
    <React.Fragment>
      <div className={'card vacancy_card'}>
        <div className="card-body">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div
                className={`btn btn-lg btn-block btn-outline-default pointer ${activeTab === ETab.find ? 'active' : ''}`}
                onClick={() => switchTabs(ETab.find)}>
                Поиск кандидата
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div
                className={`btn btn-lg btn-block btn-outline-default pointer ${activeTab === ETab.resumes ? 'active' : ''}`}
                onClick={() => switchTabs(ETab.resumes)}>
                Кандидаты
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeTab === ETab.find && (
        <div className={'card'}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="comment-widgets scrollable">
                  {resumeFinds.map(item => (
                    <React.Fragment>
                      <div className="d-flex flex-row comment-row m-t-0" key={item.id}>
                        <div className="comment-text w-100">
                          <h6 className="font-medium">{item.fio}</h6>
                          <span className="m-b-15 d-block">{item.skills.join(', ')} </span>
                          <div className="comment-footer">
                            <span className="text-muted float-right">April 14, 2016</span>
                          </div>
                        </div>
                      </div>
                      <div className={'d-flex no-block card-body border-top'}/>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === ETab.resumes && (
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <VacancyResumeReports vacancyId={vacancyId} />
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="card">
              <div className={'card-body'}>
                <h5 className="card-title">Количество откликов</h5>
                <div className={'text-center'} style={{display: 'flex', justifyContent: 'center'}}>
                  <BarChart
                    width={500}
                    height={400}
                    data={graphData}
                    margin={{top: 5, right: 30, left: 20, bottom: 5}}
                    barSize={20}
                  >
                    <XAxis dataKey="name" scale="point" padding={{left: 10, right: 10}}/>
                    <Tooltip/>
                    <CartesianGrid strokeDasharray="3 2"/>
                    <Bar label={true} dataKey="value" fill="#8884d8" background={{fill: '#eee'}}/>
                  </BarChart>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === ETab.resume && (
        <div className={'card vacancy_card'}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <button type="button" className="btn btn-lg btn-block btn-outline-default"
                        style={{backgroundColor: '#06c', color: '#fafafa'}}>Подобрать кандидатов
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </React.Fragment>

  )
}

export default VacancyTabs
