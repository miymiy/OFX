// @flow

import { fork, put } from 'redux-saga/effects';

function* fetchCurrencyTypes(): Generator<*, *, *> {
  /* Some api calls to get currency types
     using fake data */

  const currencies = {
    '': '',
    AUD: 'Australian Dollar (AUD)',
    USD: 'United States Dollar (USD)',
    CAD: 'Canadian Dollar (CAD)',
    EUR: 'Euro (EUR)',
    GBP: 'British Pound (GBP)',
    HKD: 'Hong Kong Dollar (HKD)',
    NZD: 'New Zealand Dollar (NZD)',
  };
  yield put({
    type: 'DATA/FORM/UPDATE_SELECTOR_DATA',
    data: {
      currencies,
    },
  });
}

function* fetchCountryCodes(): Generator<*, *, *> {
  /*
  ** using fake data because API below fetches too many
  ** country codes

  const uri = 'https://restcountries.eu/rest/v2/all'
  const apiData = yield call(request, uri)
  const data = apiData.reduce((acc, curr) => {
      const codes = curr.callingCodes.reduce((a, c) => {
        if (!!c) {
          return {
            ...a,
            [c]: `+${c}`
          }
        }
        return a
      }, {})
      return {
        ...acc,
        ...codes
      }
    }, {})
  */
  const countryCodes = {
    '11': '+1',
    '61': '+61',
    '886': '+886',
  };
  yield put({
    type: 'DATA/FORM/UPDATE_SELECTOR_DATA',
    data: {
      countryCodes,
    },
  });
}

const staticDataSagas = [
  fork(fetchCurrencyTypes),
  fork(fetchCountryCodes),
];

export default staticDataSagas;
