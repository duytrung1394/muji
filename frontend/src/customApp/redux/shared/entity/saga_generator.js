import { call, put, all, takeEvery } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

export function restSagaFunctions(name, api, actions) {
  return {
    // USAGE: fetch.request(primary_key)
    fetch: function*({ payload }) {
      try {
        const response = yield call(api.GET, payload);
        yield put(actions.fetch.success(response.data));
      } catch (error) {
        if (error.response.status == 401) {
          yield put(authActions.unauthorized(error));
        } else {
          yield put(actions.fetch.failure(error));
        }
      }
    },
    // USAGE: create.request(entity)
    create: function*({ payload }) {
      try {
        const response = yield call(api.POST, { [name]: payload });
        yield put(actions.create.success(response.data));
      } catch (error) {
        if (error.response.status == 401) {
          yield put(authActions.unauthorized(error));
        } else {
          yield put(actions.create.failure(error));
        }
      }
    },
    // USAGE: update.request(primary_key, entity)
    update: function*({ payload }) {
      try {
        const { primaryKey, entity } = payload;
        const response = yield call(api.PUT, primaryKey, { [name]: entity });
        yield put(actions.update.success(response.data));
      } catch (error) {
        if (error.response.status == 401) {
          yield put(authActions.unauthorized(error));
        } else {
          yield put(actions.update.failure(error));
        }
      }
    },
    // USAGE: destroy.request(primary_key)
    destroy: function*({ payload }) {
      try {
        const response = yield call(api.DELETE, payload);
        yield put(actions.destroy.success(response.data));
      } catch (error) {
        if (error.response.status == 401) {
          yield put(authActions.unauthorized(error));
        } else {
          yield put(actions.destroy.failure(error));
        }
      }
    }
  };
}

export default function restEntityAllSaga(name, api, actions) {
  const f = restSagaFunctions(name, api, actions);
  return all(
    ["fetch", "create", "update", "destroy"].map(m =>
      takeEvery(actions[m].request.toString(), f[m])
    )
  );
}
