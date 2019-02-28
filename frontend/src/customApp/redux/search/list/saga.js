import actions from "./actions";
import { RESTListApi } from "../../../../restApi";
import restAllSaga from "../../shared/list/saga_generator";
import { takeEvery, put, call } from "redux-saga/effects";
import authActions from "../../../../redux/auth/actions";

const api = RESTListApi("search/stores", "codes");
const listItemApi = RESTListApi("search/items", "codes");
<<<<<<< HEAD
const listArticleApi = RESTListApi("search/articles", "codes");
=======
const listServiceApi = RESTListApi("search/services", "codes");
>>>>>>> develop

const getListItemFunction = function*({ payload }) {
  try {
    const response = yield call(listItemApi.GET, payload);
    yield put(actions.fetch.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.fetch.failure(error));
    }
  }
};

<<<<<<< HEAD
const getListArticleFunction = function*({ payload }) {
    try {
        const response = yield call(listArticleApi.GET, payload);
        yield put(actions.fetch.success(response.data));
    } catch (error) {
        if (error.response.status == 401) {
            yield put(authActions.unauthorized(error));
        } else {
            yield put(actions.fetch.failure(error));
        }
    }
=======
const getListServiceFunction = function*({ payload }) {
  try {
    const response = yield call(listServiceApi.GET, payload);
    yield put(actions.fetch.success(response.data));
  } catch (error) {
    if (error.response.status == 401) {
      yield put(authActions.unauthorized(error));
    } else {
      yield put(actions.fetch.failure(error));
    }
  }
>>>>>>> develop
};

export default function* saga() {
  yield restAllSaga(api, actions);
  yield takeEvery(actions.fetchItem.request.toString(), getListItemFunction);
<<<<<<< HEAD
    yield takeEvery(actions.fetchArticle.request.toString(), getListArticleFunction);
=======
  yield takeEvery(
    actions.fetchService.request.toString(),
    getListServiceFunction
  );
>>>>>>> develop
}
