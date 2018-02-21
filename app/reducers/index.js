// @flow

import { combineReducers } from 'redux'
import pageReducer from './pageReducer'
import formReducer from './formReducer'
// import resultReducer from './resultReducer'

const appReducers = () => combineReducers({
  page: pageReducer,
  form: formReducer,
  // result: resultReducer
})

export default appReducers
