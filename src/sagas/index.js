import { put, takeLatest, all } from "redux-saga/effects";
import axios from "axios";

function* fetchshowingMovies() {
  const json = yield axios.get("http://localhost:8900/intheatre");
  yield put({ type: "SHOWING_MOVIE_DATA", json: json });
}

function* fetchComingSoonMovies() {
  const json = yield axios.get("http://localhost:8900/comingsoon");
  yield put({ type: "COMING_MOVIE_DATA", json: json });
}

function* fetchSelectedInTheatreMovie({ id }) {
  console.log(id);
  const json = yield axios.get(`http://localhost:8900/intheatre?id=${id}`);
  yield put({ type: "SELECTED_SHOWING_MOVIE_DATA", json: json });
}

function* fetchSelectedComingSoonMovie({ id }) {
  console.log(id);
  const json = yield axios.get(`http://localhost:8900/comingsoon?id=${id}`);
  yield put({ type: "SELECTED_COMING_SOON_MOVIE_DATA", json: json });
}

function* actionWatcher() {
  yield takeLatest("GET_SHOWING_MOVIE", fetchshowingMovies);
  yield takeLatest("GET_COMING_MOVIE", fetchComingSoonMovies);
  yield takeLatest("GET_SELECTED_SHOWING_MOVIE", fetchSelectedInTheatreMovie);
  yield takeLatest(
    "GET_SELECTED_COMING_SOON_MOVIE",
    fetchSelectedComingSoonMovie
  );
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
