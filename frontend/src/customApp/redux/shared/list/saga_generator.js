import { call, put, all, takeEvery } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

export function restSagaFunctions(api, actions) {
  return {
    // USAGE: fetch.request(page)
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
    // USAGE: destroy.request(primary_keys)
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

export default function restListAllSaga(api, actions) {
  const f = restSagaFunctions(api, actions);
  return all(
    ["fetch", "destroy"].map(m =>
      takeEvery(actions[m].request.toString(), f[m])
    )
  );
}
