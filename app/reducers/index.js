// @flow

import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import formReducer from './formReducer';
import quoteReducer from './quoteReducer';
import staticDataReducer from './staticDataReducer';

import type { PageReducerProps } from './pageReducer';
import type { FormReducerProps } from './formReducer';
import type { QuoteReducerProps } from './quoteReducer';
import type { StaticDataReducerProps } from './staticDataReducer';

export type StoreProps = {
  page: PageReducerProps,
  form: FormReducerProps,
  quote: QuoteReducerProps,
  staticData: StaticDataReducerProps,
}

const appReducers = () => combineReducers({
  page: pageReducer,
  form: formReducer,
  quote: quoteReducer,
  staticData: staticDataReducer,
});

export default appReducers;
