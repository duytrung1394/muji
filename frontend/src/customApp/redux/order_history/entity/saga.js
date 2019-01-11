import actions from './actions';
import {RESTEntityApi} from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';

const api = RESTEntityApi('order-histories');

export default function* saga() {
  yield restAllSaga('order_history', api, actions)
}
