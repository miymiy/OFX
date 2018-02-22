// @flow
import type { SelectorData } from '../components/form/select-control';

export type StaticDataReducerProps = {
  form: {
    countryCodes: SelectorData,
    currencies: SelectorData,
    required: {
      firstName: true,
      lastName: true,
      fromCurrency: true,
      toCurrency: true,
      amount: true,
    }
  }
}

const staticDataReducer = (
  state?: StaticDataReducerProps,
  action: *,
): StaticDataReducerProps => {
  if (!state) {
    return {
      form: {
        countryCodes: {},
        currencies: {},
        required: {
          firstName: true,
          lastName: true,
          fromCurrency: true,
          toCurrency: true,
          amount: true,
        },
      },
    };
  }
  switch (action.type) {
    case 'DATA/FORM/UPDATE_SELECTOR_DATA': {
      return {
        ...state,
        form: {
          ...state.form,
          ...action.data,
        },
      };
    }
    default:
      return state;
  }
};

export default staticDataReducer;
