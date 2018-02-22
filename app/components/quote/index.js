// @flow

import * as React from 'react';
import Rate from './rate';
import Currency from './currency';
import RestartButton from './restart-button';
import { CURRENCY_SELECTOR_TYPES } from '../../constants';

const Quote = () => (
  <div className="panel panel-default">
    <div className="panel-body text-center">
      <div className="flex-container">
        <div className="flex-item" />
        <div className="flex-item">
          <Rate />
          <Currency type={CURRENCY_SELECTOR_TYPES.FROM} />
          <Currency type={CURRENCY_SELECTOR_TYPES.TO} />
        </div>
        <div className="flex-item" />
      </div>
      <RestartButton />
    </div>
  </div>
);

export default Quote;
