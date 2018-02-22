// @flow

type ResultReducerProps = {
  rate: number,
  fromCurrency: string,
  toCurrency: string,
  fromAmount: number,
  toAmount: number
}

const resultReducer = (state: ?ResultReducerProps, action: *): ResultReducerProps => {
  if (!state) {
    return {
      rate: 1,
      fromCurrency: 'AUD',
      toCurrency: 'AUD',
      fromAmount: 0,
      toAmount: 0
    }
  }
  switch (action.type) {
    case 'RESULT/UPDATE':
      return action.data
    default:
      return state
  }
}

export default resultReducer
