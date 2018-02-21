// @flow

import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import formReducer from './formReducer'

const appReducers = () => combineReducers({
  page: pageReducer,
  form: formReducer,
})

export default appReducers
