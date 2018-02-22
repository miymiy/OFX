import R from 'ramda'
import { fork, call, put, take, spawn, select } from 'redux-saga/effects'
import { request, dollarStrToNumber } from './utils'
import { ERROR_MESSAGES } from './components/constants'

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
    NZD: 'New Zealand Dollar (NZD)'
  }
  yield put({
    type: 'DATA/FORM/UPDATE_SELECTOR_DATA',
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
    type: 'DATA/FORM/UPDATE_SELECTOR_DATA',
    data: {
      countryCodes
    }
  })
  
}

function* validateFormData(): * {
  const {
    staticData,
    form
  } = yield select(s => s)

  const formData = form.data

  const errors = Object.keys(staticData.form.required).reduce(
    (err, fieldName) => {
      if (!formData[fieldName]) {
        return {
          ...err,
          [fieldName]: ERROR_MESSAGES.REQUIRED_FIELD
        }
      }
      return err
    }, {}
  )
  const currencyErrors = formData.fromCurrency === formData.toCurrency ?
    { fromCurrency: true, toCurrency: true } : {}
  yield put({
    type: 'FORM/UPDATE_ERRORS',
    data: {
      ...errors,
      ...currencyErrors
    }
  })
}


type ConversionResult = {
  CustomerRate: number,
  CustomerAmount: number,
  Message: string
}

function* putQuoteToResult(result: ConversionResult,
  fromCurrency: string,
  toCurrency: string,
  fromAmount: number
): * {
  yield put({
    type: 'RESULT/UPDATE',
    data: {
      rate: result.CustomerRate,
      fromCurrency,
      toCurrency,
      fromAmount,
      toAmount: result.CustomerAmount
    }
  })
  yield put({
    type: 'PAGE/CHANGING_LOCATION',
    data: 'result'
  })
}

function* fetchQuote(): Generator<*, *, *> {
  yield put.resolve({
    type: 'PAGE/TOGGLE_LOADING'
  })
  yield call(validateFormData)
  const {
    data,
    errors
  } = yield select(s => s.form)

  const amount = dollarStrToNumber(data.amount)

  if (!R.isEmpty(errors) || isNaN(amount)) {
    //some better error handling here
    return
  }
  const uri = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${data.fromCurrency}/${data.toCurrency}/${amount}?format=json`
  const result = yield call(request, uri)
  yield spawn(putQuoteToResult, result, data.fromCurrency, data.toCurrency, amount)
  yield put({
    type: 'PAGE/TOGGLE_LOADING'
  })
}

function* watchLocationChange(): Generator<*, *, *> {
  while (true) {
    const { data } = yield take('PAGE/CHANGING_LOCATION')
    history.pushState(null, '', `${window.location.origin}/${data}`)
    yield put({
      type: 'PAGE/CHANGE_LOCATION',
      data,
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