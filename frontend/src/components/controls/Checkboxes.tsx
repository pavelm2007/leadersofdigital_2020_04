import React, {useEffect, useState} from 'react'
import './controls.css'

interface ICheckBox {
  label: string
  value: string | number
}

type Props = {
  direction?: 'horizontal' | 'vertical'
  label?: string
  items: ICheckBox[]
  value: any[]
  errors?: string[] | string
  onChange: (val: string | number | any[]) => {}
}

export const Checkboxes = (props: Props) => {
  const [vals, setVals] = useState<any[]>(props.value)
  const {label, items, value, errors, onChange, direction = 'vertical'} = props

  useEffect(() => {
    onChange(vals)
  }, [vals])

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    handleClick(e.currentTarget.value)
  }

  const handleClick = (v: any) => {
    let newVals
    if (vals.indexOf(v) > -1) {
      newVals = vals.filter(i => i !== v)
    } else {
      newVals = [...vals, v]
    }
    setVals(newVals)
  }

  return (
    <div className="form-group row">
      {!!label && <label className="col-md-3">{label}</label>}
      <div className={`col-md-12 ${direction==='horizontal'? 'flex-display flex-row' : '' }`}>
        {items.map((item: ICheckBox, i: number) => (
          <div className="custom-control custom-checkbox mr-sm-2" key={i} onClick={() => handleClick(item.value)}>
            <input
              type="checkbox"
              className="custom-control-input"
              id={`ch_${item.value}`}
              value={item.value}
              checked={vals.indexOf(item.value) > -1}
              onChange={e => handleChange(e)}
            />
            <label className="custom-control-label" htmlFor={String(item.value)}>{item.label}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Checkboxes
