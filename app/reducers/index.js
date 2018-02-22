// @flow

import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import formReducer from './formReducer';
import quoteReducer from './quoteReducer';
import staticDataReducer from './staticDataReducer';

const appReducers = () => combineReducers({
  page: pageReducer,
  form: formReducer,
  quote: quoteReducer,
  staticData: staticDataReducer,
});

export default appReducers;
