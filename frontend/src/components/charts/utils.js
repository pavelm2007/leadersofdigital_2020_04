import {useState} from 'react'
import {graduates} from 'src/__mocks__/graduates'
import {vacancy} from 'src/__mocks__/vacansy'
import {students} from 'src/__mocks__/students'

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
