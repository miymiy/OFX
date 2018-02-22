// @flow

import React from 'react'
import FormControl from 'react-bootstrap/lib/FormControl'

export type SelectorData = { [key: string]: true }

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