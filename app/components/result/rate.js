// @flow

import * as React from 'react';
import { connect } from 'react-redux';

const Rate = (props: { rate: number }) => (
  <React.Fragment>
    <h3>OFX Customer Rate</h3>
    <span
      style={{
        color: 'rgb(0, 204, 153)',
        fontSize: '4em',
      }}
    >
      {props.rate.toFixed(4)}
    </span>
  </React.Fragment>
);

export default connect(state => ({
  rate: state.result.rate,
}), null)(Rate);
