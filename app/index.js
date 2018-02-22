import * as React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import Layout from './layout';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers(), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  global.document.getElementById('app-root'),
);
