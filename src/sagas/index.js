import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchMovies() {
  const json = yield axios("http://localhost:8900/intheatre");
  yield put({ type: "MOVIE_DATA", json: json });
}

function* actionWatcher() {
  yield takeLatest("GET_MOVIE", fetchMovies);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
