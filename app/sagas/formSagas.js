// @flow

import R from 'ramda';
import { fork, call, put, take, spawn, select } from 'redux-saga/effects';
import { request, dollarStrToNumber } from '../utils';
import { ERROR_MESSAGES } from '../constants';

type ConversionResult = {
  CustomerRate: number,
  CustomerAmount: number,
  Message: string
}

function* validateFormData(): * {
  const {
    staticData,
    form,
  } = yield select(s => s);

  const formData = form.data;

  const errors = Object.keys(staticData.form.required).reduce((err, fieldName) => {
    if (!formData[fieldName]) {
      return {
        ...err,
        [fieldName]: ERROR_MESSAGES.REQUIRED_FIELD,
      };
    }
    return err;
  }, {});

  const currencyErrors =
    !!formData.fromCurrency && formData.fromCurrency === formData.toCurrency ? {
      fromCurrency: ERROR_MESSAGES.DUPLICATE_CURRENCIES,
      toCurrency: ERROR_MESSAGES.DUPLICATE_CURRENCIES,
    } : {};

  const amountErrors = Number.isNaN(dollarStrToNumber(formData.amount))
    ? { amount: ERROR_MESSAGES.AMOUNT_NOT_NUMBER } : {};

  yield put({
    type: 'FORM/UPDATE_ERRORS',
    data: {
      ...errors,
      ...currencyErrors,
      ...amountErrors,
    },
  });
}

function* putQuoteToResult(
  result: ConversionResult,
  fromCurrency: string,
  toCurrency: string,
  fromAmount: number,
): * {
  yield put({
    type: 'RESULT/UPDATE',
    data: {
      rate: result.CustomerRate,
      fromCurrency,
      toCurrency,
      fromAmount,
      toAmount: result.CustomerAmount,
    },
  });
  yield put({
    type: 'PAGE/CHANGING_LOCATION',
    data: 'quote',
  });
}

function* fetchQuote(): Generator<*, *, *> {
  yield put({
    type: 'PAGE/TOGGLE_LOADING',
  });
  yield call(validateFormData);
  const {
    data,
    errors,
  } = yield select(s => s.form);

  if (R.isEmpty(errors)) {
    const amount = dollarStrToNumber(data.amount);
    const uri = `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${data.fromCurrency}/${data.toCurrency}/${amount}?format=json`;
    const result = yield call(request, uri);
    yield spawn(putQuoteToResult, result, data.fromCurrency, data.toCurrency, amount);
  }
  yield put({
    type: 'PAGE/TOGGLE_LOADING',
  });
}

function* watchLocationChange(): Generator<*, *, *> {
  while (true) {
    const { data } = yield take('PAGE/CHANGING_LOCATION');
    global.history.pushState(null, '', `${global.window.location.origin}/${data}`);
    yield put({
      type: 'PAGE/CHANGE_LOCATION',
      data,
    });
  }
}

function* watchSubmit(): Generator<*, *, *> {
  while (true) {
    yield take('FORM/SUBMIT');
    yield spawn(fetchQuote);
  }
}

const formSagas = [
  fork(watchLocationChange),
  fork(watchSubmit),
];

export default formSagas;
