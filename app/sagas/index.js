// @flow
import formSagas from './formSagas';
import staticDataSagas from './staticDataSagas';

export default function* sagas(): Generator<*, *, *> {
  yield [
    ...formSagas,
    ...staticDataSagas,
  ];
}
