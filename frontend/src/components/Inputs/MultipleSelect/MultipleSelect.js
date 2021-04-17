/* eslint-disable no-use-before-define */
import React, {useState} from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3)
    }
  }
}))

const MultipleSelect = ({options, handleChange, title}) => {
  const classes = useStyles()
  const [value, setValue] = useState([options[0]])
  return (
    <div className={classes.root}>
      <Autocomplete
        value={value}
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={options}
        getOptionLabel={(option) => {
          return option.title
        }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label={title} placeholder={title}/>
        )}

        onChange={(event, newValue) => {
          handleChange(newValue)
          setValue(newValue)
        }}
      />
    </div>
  )
}

export default MultipleSelect
