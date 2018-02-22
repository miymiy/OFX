// @flow

import React from 'react'
import Rate from './rate'
import Currency from './currency'
import RestartButton from './restart-button'
import { CURRENCY_SELECTOR_TYPES } from '../shared'

const Result = () => (
  <div className="panel panel-default">
    <div className="panel-body text-center">
      <Rate />
      <Currency type={CURRENCY_SELECTOR_TYPES.FROM} />
      <Currency type={CURRENCY_SELECTOR_TYPES.TO} />
      <RestartButton />
    </div>
  </div>
)

export default Result