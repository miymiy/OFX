// @flow

import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import formReducer from './formReducer';
import resultReducer from './resultReducer';
import staticDataReducer from './staticDataReducer';

const appReducers = () => combineReducers({
  page: pageReducer,
  form: formReducer,
  result: resultReducer,
  staticData: staticDataReducer,
});

export default appReducers;
