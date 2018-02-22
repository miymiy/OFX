// @flow

import React from 'react'
import FormControl, { FORM_CONTROL_TYPES } from './form-control'

const LastNameField = () => (
  <FormControl
    id='lastName'
    label='Last Name'
    placeholder='Last Name'
    type={FORM_CONTROL_TYPES.TEXT}
  />
)

export default LastNameField
