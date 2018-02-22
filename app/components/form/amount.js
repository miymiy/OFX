// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import FormControl, { FORM_CONTROL_TYPES } from './form-control';

const Amount = (props: { dispatch: * }) => (
  <FormControl
    id="amount"
    label="Amount"
    placeholder="Amount"
    type={FORM_CONTROL_TYPES.TEXT}
    onBlur={
      () => props.dispatch({
        type: 'FORM/VALIDATE_AMOUNT',
      })
    }
  />
);

export default connect(
  null,
  dispatch => ({ dispatch }),
)(Amount);
