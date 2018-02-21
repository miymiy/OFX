import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './app/reducers'
import createSagaMiddleware from 'redux-saga';
import App from './app'
import sagas from './app/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers(), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-root')
)
