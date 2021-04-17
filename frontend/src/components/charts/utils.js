import {useEffect, useState} from 'react'
import {graduates} from 'src/__mocks__/graduates'
import {vacancy} from 'src/__mocks__/vacansy'
import {students} from 'src/__mocks__/students'
import {dynamicsSVE} from 'src/__mocks__/dinamika_SVE'
import {salaryGraduate} from 'src/__mocks__/salary_graduates'
import PeopleIcon from '@material-ui/icons/PeopleOutlined'
import MoneyIcon from '@material-ui/icons/Money'
import {regions} from '../map/map_paths'
import {colors} from '@material-ui/core'


export const compareByRegionCode = (item, region) => {
  return item.region_code === region.id
}

export const useColumnRegionDataSet = (region) => {
  const [columnItems, setColumnItems] = useState([])

  const setColumnDataSet = (region) => {


    if (region !== null) {
      const graduateData = graduates.find((item) => compareByRegionCode(item, region))
      const vacancyData = vacancy.find((item) => compareByRegionCode(item, region))
      const studentData = students.find((item) => compareByRegionCode(item, region))

      const data = [
        {
          color: colors.blueGrey.A700,
          items: [{x: 'IT сфера', y: parseInt(graduateData.it / 1000)}, {
            x: 'Всего',
            y: parseInt(graduateData.all / 1000)
          }]
        },
        {
          color: colors.orange.A700,
          items: [{x: 'IT сфера', y: parseInt(vacancyData.it / 1000)}, {
            x: 'Всего',
            y: parseInt(vacancyData.all / 1000)
          }]
        },
        {
          color: colors.lightGreen.A700,
          items: [{x: 'IT сфера', y: parseInt(studentData.it / 1000)}, {
            x: 'Всего',
            y: parseInt(studentData.all / 1000)
          }]
        }
      ]
      setColumnItems(data)
    }
  }

  return [columnItems, setColumnDataSet]
}


export const useActiveRegion = (defaultRegion) => {
  const [activeRegion, setActiveRegion] = useState(defaultRegion)

  const setRegion = (region) => {
    if (region === undefined || region === null) {
      setActiveRegion(defaultRegion)
    } else {
      setActiveRegion(region)
    }
  }

  return [activeRegion, setRegion]
}

const getRandomGRB = () => {
  function randomNum () {
    return Math.floor(Math.random() * 256)
  }

  // Returns an array of 3 values for rgb
  function randomRGB () {
    let red = randomNum()
    let green = randomNum()
    let blue = randomNum()
    return [red, green, blue]
  }

  // Store an array of values for rgb
  const rgbVals = randomRGB()

  // Turn array into an rgb value
  return 'rgb(' + rgbVals[0] + ', ' + rgbVals[1] + ', ' + rgbVals[2] + ')'
}

export const useFetchSpecialities = (specialities) => {
  const [dynamicsData, setDynamicsData] = useState(null)
  useEffect(() => {
    const titles = (specialities || []).map(item => {
      return item.title
    })
    const fieldNames = ['m_01', 'm_02', 'm_03', 'm_04', 'm_05', 'm_06', 'm_07', 'm_08', 'm_09', 'm_10', 'm_11', 'm_12']
    const months = {
      m_01: 'янв',
      m_02: 'фев',
      m_03: 'мар',
      m_04: 'апр',
      m_05: 'май',
      m_06: 'июн',
      m_07: 'июл',
      m_08: 'авг',
      m_09: 'сен',
      m_10: 'окт',
      m_11: 'ноя',
      m_12: 'дек'
    }
    const data = dynamicsSVE.filter(item => titles.indexOf(item.specialty) > -1).map(item => {
      return {
        title: item.specialty,
        color: getRandomGRB(),
        items: fieldNames.map((x, i) => {
          return {a: months[x], b: item[x]}
        })
      }
    })

    setDynamicsData(data)
  }, [specialities])
  return [dynamicsData]
}


export const useFetchSalaryGraduates = () => {
  const [salaryGraduates, setSalaryGraduates] = useState(null)
  useEffect(() => {
    const data = salaryGraduate.map(item => {
      return {x: item.it_salary, y: item.it_graduates, id: item.region_code}
    })
    setSalaryGraduates(data)
  }, [])
  return [salaryGraduates]
}

export const useFetchRegionInfo = (region) => {
  const [regionInfo, setRegionInfo] = useState([])

  useEffect(() => {
      if (region !== null) {
        const graduateData = graduates.find((item) => compareByRegionCode(item, region))
        const vacancyData = vacancy.find((item) => compareByRegionCode(item, region))
        const studentData = students.find((item) => compareByRegionCode(item, region))
        const salary = salaryGraduate.find((item) => compareByRegionCode(item, region))

        const data = [
          {title: 'Выпускники', indicatorValue: `${graduateData.it} чел.`, icon: <PeopleIcon/>},
          {title: 'Вакансий', indicatorValue: `${vacancyData.it} чел.`, icon: <PeopleIcon/>},
          {title: 'Студенты', indicatorValue: `${studentData.it} чел.`, icon: <PeopleIcon/>},
          {title: 'Зарплата', indicatorValue: `${salary.it_salary} ₽`, icon: <MoneyIcon/>}

        ]
        setRegionInfo(data)
      } else {
        const graduateTotal = graduates.map(x => x.it).reduce((a, b) => {
          return a + b
        })
        const vacancyTotal = vacancy.map(x => x.it).reduce((a, b) => {
          return a + b
        })
        const studentTotal = students.map(x => x.it).reduce((a, b) => {
          return a + b
        })
        const salaryTotal = salaryGraduate.map(x => x.it_salary).reduce((a, b) => {
          return a + b
        })

        const data = [
          {title: 'Выпускники', indicatorValue: `${parseInt(graduateTotal)} чел.`, icon: <PeopleIcon fontSize={12}/>},
          {title: 'Вакансий', indicatorValue: `${parseInt(vacancyTotal)} чел.`, icon: <PeopleIcon/>},
          {title: 'Студенты', indicatorValue: `${parseInt(studentTotal)} чел.`, icon: <PeopleIcon/>},
          {title: 'Зарплата', indicatorValue: `${parseInt(salaryTotal / salaryGraduate.length)} ₽`, icon: <MoneyIcon/>}

        ]
        setRegionInfo(data)

      }
    }, [region]
  )
  return [regionInfo]
}

export const getSpecialityOptions = (items) => {
  return items.map(item => {
    return {title: item.specialty}
  }).sort((a, b) => {
    if (a.title > b.title) {
      return 1
    }
    if (a.title < b.title) {
      return -1
    }
    return 0
  })
}

export const getRegionOptions = () => {

  return regions.map(item => {
    return {title: item[1], id: item[0]}
  }).sort((a, b) => {
    if (a.title > b.title) {
      return 1
    }
    if (a.title < b.title) {
      return -1
    }
    return 0
  })
}

export const getRegionTitleById = ({id}) => {
  return regions.find(item => item[0] === id)[1]
}
