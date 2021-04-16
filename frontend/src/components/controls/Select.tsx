import React from 'react'
import Select from 'react-select'
import {ISelectItem} from '../../types'

type Props = {
  label?: string
  items: ISelectItem[]
  value: any
  errors?: string[] | string
  onChange: (val: string | number | any[]) => {}
}

export const GSelect = (props: Props) => {
  const {label, items, value} = props

  const _onChange = (v:any) => {
    props.onChange(v)
  }

  return (
    <div className="form-group row">
      <label className="col-md-3 m-t-15">{label}</label>
      <div className="col-md-12">
        <Select
          value={value}
          onChange={(v) => _onChange(v)}
          options={items}/>
      </div>
    </div>
  )
}

export default GSelect
