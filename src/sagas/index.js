import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchshowingMovies() {
  const json = yield axios("http://localhost:8900/intheatre");
  yield put({ type: "SHOWING_MOVIE_DATA", json: json });
}

function* fetchComingSoonMovies() {
  const json = yield axios("http://localhost:8900/comingsoon");
  yield put({ type: "COMING_MOVIE_DATA", json: json });
}

function* actionWatcher() {
  yield takeLatest("GET_SHOWING_MOVIE", fetchshowingMovies);
  yield takeLatest("GET_COMING_MOVIE", fetchComingSoonMovies);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
