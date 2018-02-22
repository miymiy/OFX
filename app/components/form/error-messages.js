// @flow

import R from 'ramda';
import * as React from 'react';
import { connect } from 'react-redux';
import MessageBox, { MESSAGE_BOX_TYPES } from '../message-box';

const ErrorMessages = (props: {
  errors: *,
}) => {
  const hasErrors = !R.isEmpty(props.errors);
  const isUnique = (val, idx, arr) => arr.indexOf(val) === idx;

  const messages = hasErrors
    ? Object.keys(props.errors).map(k => props.errors[k]).filter(isUnique)
    : [];
  return hasErrors && (
    <MessageBox
      type={MESSAGE_BOX_TYPES.DANGER}
    >
      {messages.map(m => (
        <div key={m}>
          {m}
        </div>
      ))}
    </MessageBox>
  );
};
export default connect(state => ({
  errors: state.form.errors,
}), null)(ErrorMessages);
