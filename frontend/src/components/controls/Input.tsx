import React from 'react'


type Props = {
  label: string
  placeholder?: string
  value?: string
  errors?: string[] | string
  onChange: (val: string) => {}
}

export const Input = (props: Props) => {
  const {label, placeholder, value, errors, onChange} = props
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value)
  }
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" className="form-control" placeholder={placeholder} onChange={e => handleChange(e)}/>
      {!!errors && (
        <div className="invalid-feedback">
          Please correct the error
        </div>
      )}
    </div>
  )
}

export default Input
