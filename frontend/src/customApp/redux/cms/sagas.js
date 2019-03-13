import { all, call, put, takeEvery } from 'redux-saga/effects';
import actions from "./actions";
import cmsApi from "../../../cmsApi";

console.log(actions);

function* fetchIncludeSaga({ payload }) {
  try {
    const fetchInclude = () => cmsApi.get(`store/cmdty/section/${payload.sectionCode}/include`);
    const response = yield call(fetchInclude);
    yield put(actions.cmdty.section.fetchInclude.success(response.data));
  } catch (error) {
    yield put(actions.cmdty.section.fetchInclude.failure(error));
  }
}

export default function* sagas() {
  yield all([
    takeEvery(actions.cmdty.section.fetchInclude.request.toString(), fetchIncludeSaga)
    // takeEvery(),
    // takeEvery(),
    // takeEvery(),
  ]);
}