import actions from './actions';
import {RESTEntityApi} from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';

const api = RESTEntityApi('addon-services');

export default function* saga() {
  yield restAllSaga('addon_service', api, actions)
}
