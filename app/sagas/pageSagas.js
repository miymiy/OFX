// @flow

import { fork, put, take } from 'redux-saga/effects';

function* watchLocationChange(): Generator<*, *, *> {
  while (true) {
    const { data } = yield take('PAGE/CHANGING_LOCATION');
    global.history.pushState(null, '', `${global.window.location.origin}/${data}`);
    yield put({
      type: 'PAGE/CHANGE_LOCATION',
      data,
    });
  }
}
const pageSagas = [
  fork(watchLocationChange),
];

export default pageSagas;
