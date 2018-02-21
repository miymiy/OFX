// @flow

import { combineReducers } from 'redux'
import loadingReducer from './loadingReducer'
import formReducer from './formReducer'

const app = () => combineReducers({
  loading: loadingReducer,
  form: formReducer,
})

export default app
