import actions from './actions';
import {RESTEntityApi} from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';

const api = RESTEntityApi('stores');

export default function* saga() {
  yield restAllSaga('store', api, actions)
}
