// @flow

type QuoteReducerProps = {
  rate: number,
  fromCurrency: string,
  toCurrency: string,
  fromAmount: number,
  toAmount: number
}

const quoteReducer = (state: ?QuoteReducerProps, action: *): QuoteReducerProps => {
  if (!state) {
    return {
      rate: 1,
      fromCurrency: 'AUD',
      toCurrency: 'AUD',
      fromAmount: 0,
      toAmount: 0,
    };
  }
  switch (action.type) {
    case 'RESULT/UPDATE':
      return action.data;
    default:
      return state;
  }
};

export default quoteReducer;
