// @flow

import * as React from 'react';
import { connect } from 'react-redux';

type ResultCurrencyProps = {
  currency: string,
  amount: number,
  type: 'From' | 'To'
}

const Currency = (props: ResultCurrencyProps) => (
  <div className="text-left">
    <h2>{props.type}</h2>
    <span
      style={{
        fontSize: '3em',
      }}
    >
      {props.currency}
    </span>
    <span
      style={{
        color: '#2e6da4',
        fontSize: '3em',
        paddingLeft: '10px',
      }}
    >
      {props.amount.toFixed(2)}
    </span>
  </div>
);

export default connect((state, props) => {
  const type = props.type.toLowerCase();
  return {
    currency: state.result[`${type}Currency`],
    amount: state.result[`${type}Amount`],
  };
}, null)(Currency);
