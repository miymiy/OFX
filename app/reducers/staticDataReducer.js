
const staticDataReducer = (state?: *, action: *) =>{
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
          amount: true
        }
      }
    }
  }
  switch (action.type) {
    case 'DATA/FORM/UPDATE_SELECTOR_DATA': {
      return {
        ...state,
        form: {
          ...state.form,
          ...action.data
        }
      }
    }
  }
  return state
}

export default staticDataReducer