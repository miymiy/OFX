// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import FormControl from './form-control';

const EmailField = (props: { dispatch: * }) => (
  <FormControl
    id="email"
    label="Email"
    placeholder="Email"
    type="text"
    onBlur={() => props.dispatch({
      type: 'FORM/VALIDATE_EMAIL',
    })}
  />
);

export default connect(
  null,
  dispatch => ({ dispatch }),
)(EmailField);
