// @flow

import React from 'react'
import FormControl from './form-control'
import { connect } from 'react-redux'

const EmailField = (props: { dispatch: * }) => (
  <FormControl
    id='email'
    label='Email'
    placeholder='Email'
    type='text'
    onBlur={e => props.dispatch({
      type: 'FORM/VALIDATE_EMAIL'
    })}
  />
)

export default connect(
  null,
  dispatch => ({ dispatch })
)(EmailField)

