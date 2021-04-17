import {useState} from 'react'
import {graduates} from 'src/__mocks__/graduates';
import {vacansy} from 'src/__mocks__/vacansy';
import {students} from 'src/__mocks__/students';

export const useColumnRegionDataSet = (region) => {
  const [isOnline, setIsOnline] = useState(null)

  const compareByRegionCode = (item) => {
    return item.region_code == region.id
  }

  const dataSet = [
    graduates.find(compareByRegionCode),
    vacansy.find(compareByRegionCode),
    students.find(compareByRegionCode),
  ]

  const myDataset = [
    [
      {x: 'a', y: 1},
      {x: 'b', y: 2},
      {x: 'c', y: 3},
      {x: 'd', y: 2},
      {x: 'e', y: 1}
    ],
    [
      {x: 'a', y: 2},
      {x: 'b', y: 3},
      {x: 'c', y: 4},
      {x: 'd', y: 5},
      {x: 'e', y: 5}
    ],
    [
      {x: 'a', y: 1},
      {x: 'b', y: 2},
      {x: 'c', y: 3},
      {x: 'd', y: 4},
      {x: 'e', y: 4}
    ]
  ]

  // ...

  return isOnline
}
