import {call, put, all, takeEvery} from "redux-saga/effects";

export function restSagaFunctions(name, api, actions) {
  return {
    // USAGE: fetch.request(id)
    fetch: function* ({payload}) {
      try {
        const response = yield call(api.GET, payload);
        yield put(actions.fetch.success(response.data));
      } catch (error) {
        yield put(actions.fetch.failure(error));
      }
    },
    // USAGE: create.request(entity)
    create: function* ({payload}) {
      try {
        const response = yield call(api.POST, {[name]: payload});
        yield put(actions.create.success(response.data));
      } catch (error) {
        yield put(actions.create.failure(error));
      }
    },
    // USAGE: update.request(id, entity)
    update: function* ({payload}) {
      try {
        const {id, entity} = payload;
        const response = yield call(api.PUT, id, {[name]: entity});
        yield put(actions.update.success(response.data));
      } catch (error) {
        yield put(actions.update.failure(error));
      }
    },
    // USAGE: destroy.request(id)
    destroy: function* ({payload}) {
      try {
        const response = yield call(api.DELETE, payload);
        yield put(actions.destroy.success(response.data));
      } catch (error) {
        yield put(actions.destroy.failure(error));
      }
    },
  };
}

export default function restEntityAllSaga(name, api, actions) {
  const f = restSagaFunctions(name, api, actions);
  return all(
    ['fetch', 'create' ,'update' ,'destroy'].map( m =>
      takeEvery(actions[m].request.toString(), f[m])
    )
  );
}