import {TResumeItem, TResumeReportItem} from '../types'
import {rnd} from '../utils'

const API_URL = 'http://localhost:8080/api/vacancies/'

// class VacancyService {
//   list() {
//     return axios
//       .post(API_URL)
//       .then(r => r.json())
//   }
// }

const description = 'Мы разрабатываем решения для розничного блока и ищем в команду опытного ' +
  'разработчика Front-end (REACT). Мы работаем по методологии Agile, используя современный стек разработки.'

class FakeResumeService {
  find(specialtyId: number) {
    const promise = new Promise<Array<TResumeItem>>((resolve, reject) => {
      const result = [
        {
          id: 1,
          fio: 'Васильев Эдуард Егорович',
          skills: ['python', 'django', 'postgres'],
          created: '1976-04-19T12:59-0500'
        },
        {
          id: 2,
          fio: 'Куликов Федор Ростиславович',
          skills: ['python', 'tornado', 'postgres'],
          created: '1976-04-19T12:59-0500'
        },
        {
          id: 3,
          fio: 'Корнилов Лукьян Семенович',
          skills: ['python', 'django', 'mongo'],
          created: '1976-04-19T12:59-0500'
        },
        {
          id: 4,
          fio: 'Кузьмин Егор Тимурович',
          skills: ['php', 'flask', 'mysql'],
          created: '1976-04-19T12:59-0500'
        }
      ]
      resolve(result)
    })
    return promise.then(r => r)
  }

  resumeList(vacancyId: number) {
    const promise = new Promise<Array<TResumeReportItem>>((resolve, reject) => {
      const fios = [
        {
          id: 1,
          fio: 'Дементьев Арсений Авксентьевич',
          compliance: rnd(30, 90),
          firstCall: -1,
          testResult: null,
          interviewResult: null,
          jobInvitation: null
        },
        {
          id: 2,
          fio: 'Савельев Савелий Лукьевич',
          compliance: rnd(30, 90),
          firstCall: -1,
          testResult: null,
          interviewResult: null,
          jobInvitation: null,
        },
        {
          id: 3,
          fio: 'Комиссаров Влас Авксентьевич',
          compliance: rnd(30, 90),
          firstCall: rnd(1, 5),
          testResult: -1,
          interviewResult: null,
          jobInvitation: null,
        },
        {
          id: 4,
          fio: 'Поляков Наум Тихонович',
          compliance: rnd(30, 90),
          firstCall: rnd(1, 5),
          testResult: -1,
          interviewResult: null,
          jobInvitation: null,
        },
        {
          id: 5,
          fio: 'Щербаков Гарри Оскарович',
          compliance: rnd(30, 90),
          firstCall: rnd(1, 5),
          testResult: rnd(1, 5),
          interviewResult: -1,
          jobInvitation: null,
        },
        {
          id: 6,
          fio: 'Колесников Адриан Викторович',
          compliance: rnd(30, 90),
          firstCall: rnd(1, 5),
          testResult: rnd(1, 5),
          interviewResult: -1,
          jobInvitation: null,
        },
        {
          id: 7,
          fio: 'Жданов Илларион Львович',
          compliance: rnd(30, 90),
          firstCall: rnd(1, 5),
          testResult: rnd(1, 5),
          interviewResult: rnd(30, 100),
          jobInvitation: -1
        },
        {
          id: 8,
          fio: 'Симонов Фрол Богданович',
          compliance: rnd(30, 90),
          firstCall: rnd(1, 5),
          testResult: rnd(1, 5),
          interviewResult: rnd(30, 100),
          jobInvitation: null
        },
        {
          id: 9,
          fio: 'Фёдоров Аполлон Леонидович',
          compliance: rnd(30, 90),
          firstCall: rnd(1, 5),
          testResult: rnd(1, 5),
          interviewResult: rnd(30, 100),
          jobInvitation: null
        },
        {
          id: 10,
          fio: 'Кузнецов Бенедикт Рубенович',
          compliance: rnd(30, 90),
          firstCall: rnd(1, 5),
          testResult: rnd(1, 5),
          interviewResult: rnd(30, 100),
          jobInvitation: Boolean(Math.random() < 0.5)
        }
      ]
      resolve(fios)
    })
    return promise.then(r => r)
  }
}

// export type TVacancyService = VacancyService
export type TVacancyService = FakeResumeService
// export default new VacancyService()
export default new FakeResumeService()
