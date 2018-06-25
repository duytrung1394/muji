import actions from './actions';
import {RESTEntityApi} from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';

const api = RESTEntityApi('items');

export default function* saga() {
  yield restAllSaga('item', api, actions)
}
