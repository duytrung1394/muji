import actions from './actions';
import {RESTListApi} from '../../../../restApi';
import restAllSaga from '../../shared/list/saga_generator';

const api = RESTListApi('<%= endpoint %>', '<%= pluralize(pkName) %>');

export default function* saga() {
  yield restAllSaga(api, actions)
}
