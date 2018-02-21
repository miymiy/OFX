// @flow

import React from 'react'
import { connect } from 'react-redux'
import FormControl, { FORM_CONTROL_TYPES } from './form-control'
import type { SelectorData } from '../../reducers/formReducer'

export const CURRENCY_SELECTOR_TYPES = {
  FROM: 'From',
  TO: 'To'
}

const CurrencySelector = (props: {
  type: 'From' | 'To',
  currencies: SelectorData
}) => {
  const {
    type,
    currencies
  } = props
  const id = `${type.toLowerCase()}Currency`
  const text = `${type} Currency`
  return (
    <FormControl
      id={id}
      label={text}
      required
      placeholder={text}
      type={FORM_CONTROL_TYPES.SELECT}
      options={currencies}
    />
  )
}
export default connect(
  state => ({
    currencies: state.form.selectorData.currencies,
  }), null
)(CurrencySelector)
