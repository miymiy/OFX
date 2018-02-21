import R from 'ramda'
import { fork, call, put, take, spawn, select } from 'redux-saga/effects'
import { request, dollarStrToNumber } from './utils'

function* fetchCurrencyTypes(): Generator<*, *, *> {
  /* Some api calls to get currency types
     using fake data */

  const currencies = {
    '': '',
    AUD: 'Australian Dollar (AUD)',
    CAD: 'Canadian Dollar (CAD)',
    EUR: 'Euro (EUR)',
    GBP: 'British Pound (GBP)',
    HKD: 'Hong Kong Dollar (HKD)',
    NZD: 'New Zealand Dollar (NZD)'
  }
  yield put({
    type: 'FORM/UPDATE_SELECTOR_DATA',
    data: {
      currencies
    }
  })
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
   '886': '+886'
 }
  yield put({
    type: 'FORM/UPDATE_SELECTOR_DATA',
    data: {
      countryCodes
    }
  })
  
}

function* fetchQuote(): Generator<*, *, *> {
  const {
    data,
    errors
  } = yield select(s => s.form)

  const amount = dollarStrToNumber(data.amount)

  if (!R.isEmpty(errors) || isNaN(amount)) {
    //show errors
    return
  }
  const uri = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${data.fromCurrency}/${data.toCurrency}/${amount}?format=json`
  const result = yield call(request, uri)
  // display another page
  console.log(result)
  yield put({
    type: 'PAGE/CHANGING_LOCATION',
    data: 'result'
  })
}

function* watchLocationChange(): Generator<*, *, *> {
  while (true) {
    const { data } = yield take('PAGE/CHANGING_LOCATION')
    history.pushState(null, '', `${window.location.href}${data}`)
    yield put({
      type: 'PAGE/CHANGE_LOCATION',
      data: 'result'
    })
  }
}

function* watchSubmit(): Generator<*, *, *> {
  while (true) {
    yield take('FORM/SUBMIT')
    yield spawn(fetchQuote)
  }
}

export default function* sagas(): Generator<*, *, *> {
  yield [
    fork(watchLocationChange),
    fork(watchSubmit),
    fork(fetchCountryCodes),
    fork(fetchCurrencyTypes)
  ]
}