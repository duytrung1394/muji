import { all, call, put, takeEvery } from "redux-saga/effects";
import actions from "./actions";
import cmsApi from "../../../cmsApi";

function* fetchCmdtySectionIncludeSaga({ payload }) {
  try {
    const fetch = () =>
      cmsApi.get(`store/cmdty/section/${payload.sectionCode}/include`);
    const response = yield call(fetch);
    yield put(actions.cmdty.section.include.fetch.success(response.data));
  } catch (error) {
    yield put(actions.cmdty.section.include.fetch.failure(error));
  }
}

function* fetchCmdtyDetailInclude1Saga({ payload }) {
  try {
    const fetch = () =>
      cmsApi.get(`store/cmdty/detail/${payload.productCode}/include1`);
    const response = yield call(fetch);
    yield put(actions.cmdty.detail.include1.fetch.success(response.data));
  } catch (error) {
    yield put(actions.cmdty.detail.include1.fetch.failure(error));
  }
}

function* fetchCmdtyDetailInclude2Saga({ payload }) {
  try {
    const fetch = () =>
      cmsApi.get(`store/cmdty/detail/${payload.productCode}/include2`);
    const response = yield call(fetch);
    yield put(actions.cmdty.detail.include2.fetch.success(response.data));
  } catch (error) {
    yield put(actions.cmdty.detail.include2.fetch.failure(error));
  }
}

export default function* sagas() {
  yield all([
    takeEvery(
      actions.cmdty.section.include.fetch.request.toString(),
      fetchCmdtySectionIncludeSaga
    ),
    takeEvery(
      actions.cmdty.detail.include1.fetch.request.toString(),
      fetchCmdtyDetailInclude1Saga
    ),
    takeEvery(
      actions.cmdty.detail.include2.fetch.request.toString(),
      fetchCmdtyDetailInclude2Saga
    )
    // takeEvery(),
    // takeEvery(),
    // takeEvery(),
  ]);
}
