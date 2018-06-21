import actions from './actions';
import {RESTEntityApi} from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';

const api = RESTEntityApi('categories');

export default function* saga() {
  yield restAllSaga('category', api, actions)
}
