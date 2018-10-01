import actions from './actions';
import {RESTEntityApi} from '../../../../restApi';
import restAllSaga from '../../shared/entity/saga_generator';

const api = RESTEntityApi('<%= endpoint %>');

export default function* saga() {
  yield restAllSaga('<%= resource_name %>', api, actions)
}
