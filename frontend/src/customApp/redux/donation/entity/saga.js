import actions from './actions';
import {RESTEntityApi} from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';

const api = RESTEntityApi('donations');

export default function* saga() {
  yield restAllSaga('donation', api, actions)
}
