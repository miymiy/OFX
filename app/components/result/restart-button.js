// @flow

import * as React from 'react';
import { connect } from 'react-redux';
import Button from '../button';

const RestartButton = (props: { dispatch: * }) => (
  <Button
    onClick={() => {
      props.dispatch({
        type: 'PAGE/CHANGING_LOCATION',
        data: '',
      });
      props.dispatch({
        type: 'FORM/RESET',
      });
    }}
  >
    Start a new quote
  </Button>
);

export default connect(
  null,
  dispatch => ({ dispatch }),
)(RestartButton);
