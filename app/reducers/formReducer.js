// @flow

import R from 'ramda'
import { dollarStrToNumber } from '../utils'
import { ERROR_MESSAGES } from '../components/constants'

type FormDataProps = {
  firstName: string,
  lastName: string,
  email: string,
  countryCode: string,
  phoneNumber: string,
  fromCurrency: string,
  toCurrency: string,
  amount: string
}

type FormErrors = { [key: string]: string }

type FormReducerProps = {
  data: FormDataProps,
  errors: FormErrors
}

const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const initState = () => ({
  data: {
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '61',
    phoneNumber: '',
    fromCurrency: '',
    toCurrency: '',
    amount: ''
  },
  errors: {}
})

const formReducer = (state: FormReducerProps, action: *)
  : FormReducerProps => {
  if (!state) {
    return {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '61',
        phoneNumber: '',
        fromCurrency: '',
        toCurrency: '',
        amount: ''
      },
      errors: {}
    }
  }
  switch (action.type) {
    case 'FORM/RESET':
      return initState()
    case 'FORM/UPDATE_INPUT': {
      const {
        key,
        value
      } = action.data
      return {
        ...state,
        errors: R.omit([key], state.errors),
        data: {
          ...state.data,
          [key]: value
        }
      }
    }
    case 'FORM/VALIDATE_REQ_FIELD': {
      const data = state.data[action.data]
      if (!data) {
        return {
          ...state,
          errors: {
            ...state.errors,
            [action.data]: ERROR_MESSAGES.REQUIRED_FIELD
          }
        }
      }
    }
    case 'FORM/VALIDATE_EMAIL': {
      const data = state.data.email
      if (!!data && !validateEmail(data)) {
        return {
          ...state,
          errors: {
            ...state.errors,
            email: ERROR_MESSAGES.INVALID_EMAIL
          }
        }
      }
      return state
    }
    case 'FORM/VALIDATE_PHONENUMBER': {
      const data = state.data.phoneNumber
      if (!!data && isNaN(+(data.replace(/ /g,'')))) {
        return {
          ...state,
          errors: {
            ...state.errors,
            phoneNumber: ERROR_MESSAGES.INVALID_PHONE_NUMBER
          }
        }
      }
      return state
    }
    case 'FORM/VALIDATE_AMOUNT': {
      if (isNaN(dollarStrToNumber(state.data.amount))) {
        return {
          ...state,
          errors: {
            ...state.errors,
            amount: ERROR_MESSAGES.AMOUNT_NOT_NUMBER
          }
        }
      }
      return state
    }
    case 'FORM/UPDATE_ERRORS': 
      return {
        ...state,
        errors: action.data
      }
    default:
      return state
  }
}

export default formReducer
