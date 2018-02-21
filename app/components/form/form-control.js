// @flow

import React from 'react'
import { connect } from 'react-redux'
import BootstrapFormControl from 'react-bootstrap/lib/FormControl'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import SelectControl from './select-control'

import type { SelectorData } from '../../reducers/formReducer'

export const FORM_CONTROL_TYPES = {
  TEXT: 'text',
  SELECT: 'select'
}

type FormControlPropsBase = {
  id: string,
  label: string,
  value: string,
  required?: boolean,
  placeholder?: string,
  hasError: boolean,
  dispatch: *
}

type FormControlTextProps = {
  type: 'text'
} & FormControlPropsBase


type FormControlSelectProps = {
  type: 'select',
  options: SelectorData
} & FormControlPropsBase

type FormControlProps =
  FormControlTextProps | FormControlSelectProps


const FormControl = (props: FormControlProps) => {
  const {
    id,
    label,
    required = false,
    value,
    placeholder = '',
    type,
    hasError,
    dispatch,
    ...rest
  } = props

  const handlers ={
    onChange: e => dispatch({
        type: 'FORM/UPDATE_INPUT',
        data: {
          key: id,
          value: e.target.value
        }
      }),
    onBlur: () => {
      if (required) {
        dispatch({
          type: 'FORM/VALIDATE_REQ_FIELD',
          data: id
        })
      }
    }
  }
  console.log(id)
  console.log(rest)

  const getControl = () => {
    if (props.type === FORM_CONTROL_TYPES.SELECT) {
      return (
        <SelectControl
          value={value}
          placeholder={placeholder}
          options={props.options}
          {...handlers}
          {...rest}
        />
      )
    }
    return (
      <BootstrapFormControl
        type={FORM_CONTROL_TYPES.TEXT}
        value={value}
        placeholder={placeholder}
        {...handlers}
        {...rest}
      />
    )
  }

  return (
    <FormGroup
      controlId={id}
      validationState={hasError ? 'error' : null}
    >
      <ControlLabel
        {...(required ? { className: 'required-input'} : {})}
      >
        {label}
      </ControlLabel>
      {getControl()}
      <BootstrapFormControl.Feedback />
    </FormGroup>
  )
}


export default connect(
  (state, props) => ({
    value: state.form.data[props.id],
    hasError: !!state.form.errors[props.id]
  }),
  dispatch => ({ dispatch })
)(FormControl)