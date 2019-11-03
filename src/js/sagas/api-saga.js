import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("DATA_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    yield put({ type: 'IS_LOADING' });
    const payload = yield call(getData);
    yield sleep(3000)
    yield put({ type: "DATA_LOADED", payload });
    yield put({ type: 'IS_LOADING_DONE' });
  } catch (e) {
    yield put({ type: "API_ERRORED", payload: e });
  }
}

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
