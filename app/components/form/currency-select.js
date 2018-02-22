// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import FormControl, { FORM_CONTROL_TYPES } from './form-control';
import type { SelectorData } from './select-control';
import type { StoreProps } from '../../reducers';

const CurrencySelector = (props: {
  type: 'From' | 'To',
  currencies: SelectorData
}) => {
  const {
    type,
    currencies,
  } = props;
  const id = `${type.toLowerCase()}Currency`;
  const text = `${type} Currency`;
  return (
    <FormControl
      id={id}
      label={text}
      placeholder={text}
      type={FORM_CONTROL_TYPES.SELECT}
      options={currencies}
    />
  );
};
export default connect((state: StoreProps) => ({
  currencies: state.staticData.form.currencies,
}), () => ({}))(CurrencySelector);
