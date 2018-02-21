// @flow

import React from 'react'
import { connect } from 'react-redux'
import InputGroup from 'react-bootstrap/lib/InputGroup'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

const Phone = (props: {
  dispatch: *,
  countryCode: string,
  phoneNumber: ?string,
  codes: { [key: string]: string },
  hasError: boolean
}) => (
  <FormGroup
    validationState={props.hasError ? 'error' : null}
  >
    <ControlLabel
    >
      Telephone / Mobile
    </ControlLabel>
    <InputGroup>
      <InputGroup.Addon>
        <select style={{
            border: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            margin: '-4px'
          }}
          value={props.countryCode}
          onChange={
            e => props.dispatch({
              type: 'FORM/UPDATE_INPUT',
              data: {
                key: 'countryCode',
                value: e.target.value
              }
            })
          }
        >
          {Object.keys(props.codes).map(v => (
            <option
              key={`id-${v}`}
              value={v}
            >
              {props.codes[v]}
            </option>
          ))}
        </select>
      </InputGroup.Addon>
      <FormControl
        type="text"
        value={props.phoneNumber || ''}
        onChange={
          e => props.dispatch({
            type: 'FORM/UPDATE_INPUT',
            data: {
              key: 'phoneNumber',
              value: e.target.value
            }
          })
        }
        onBlur={
          e => props.dispatch({
            type: 'FORM/VALIDATE_PHONENUMBER'
          })
        }
      />
    </InputGroup>
  </FormGroup>
)

export default connect(
  state => ({
    countryCode: state.form.data.countryCode,
    phoneNumber: state.form.data.phoneNumber,
    codes: state.form.selectorData.countryCodes,
    hasError: !!state.form.errors.phoneNumber
  }),
  dispatch => ({ dispatch })
)(Phone)
