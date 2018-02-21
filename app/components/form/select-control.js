// @flow

import React from 'react'
import FormControl from 'react-bootstrap/lib/FormControl'
import type { SelectorData } from '../../reducers/formReducer'

const SelectControl = (props: {
  options: SelectorData
}) => {
  const {
    options,
    ...rest
  } = props
  return (
    <FormControl
      componentClass="select"
      {...rest}
    >
      {Object.keys(options).map(v => (
        <option
          key={`id-${v}`}
          value={v}
        >
          {options[v]}
        </option>
      ))}
    </FormControl>
  )
}

export default SelectControl