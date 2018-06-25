import actions from './actions';
import {RESTEntityApi} from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';

const api = RESTEntityApi('brands');

export default function* saga() {
  yield restAllSaga('brand', api, actions)
}
