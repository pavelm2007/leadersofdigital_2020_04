import {useEffect, useState} from 'react'
import {graduates} from 'src/__mocks__/graduates'
import {vacancy} from 'src/__mocks__/vacansy'
import {students} from 'src/__mocks__/students'
import {dynamicsSVE} from 'src/__mocks__/dinamika_SVE'
import {colors} from '@material-ui/core'


export const useColumnRegionDataSet = (region) => {
  const [columnItems, setColumnItems] = useState(null)

  const setColumnDataSet = (region) => {
    const compareByRegionCode = (item) => {
      return item.region_code === region.id
    }

    if (region !== null) {
      const graduateData = graduates.find(compareByRegionCode)
      const vacancyData = vacancy.find(compareByRegionCode)
      const studentData = students.find(compareByRegionCode)

      const data = [
        {
          color: 'tomato',
          items: [{x: 'it', y: graduateData.it}, {x: 'Все', y: graduateData.all}]
        },
        {
          color: 'orange',
          items: [{x: 'it', y: vacancyData.it}, {x: 'Все', y: vacancyData.all}]
        },
        {
          color: 'green',
          items: [{x: 'it', y: studentData.it}, {x: 'Все', y: studentData.all}]
        }
      ]
      setColumnItems(data)
    }

  }

  return [columnItems, setColumnDataSet]
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
    const data = dynamicsSVE.filter(item => titles.indexOf(item.specialty) > -1).map(item => {
      return {
        title: item.specialty,
        color: getRandomGRB(),
        items: fieldNames.map((x, i) => {
          return {a: String(i + 1), b: item[x]}
        })
      }
    })

    setDynamicsData(data)
  }, [specialities])
  return [dynamicsData]
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
