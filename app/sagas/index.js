// @flow
import formSagas from './formSagas';
import staticDataSagas from './staticDataSagas';
import pageSagas from './pageSagas';

export default function* sagas(): Generator<*, *, *> {
  yield [
    ...formSagas,
    ...staticDataSagas,
    ...pageSagas,
  ];
}
