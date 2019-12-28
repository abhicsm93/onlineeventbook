import React from "react";
import ReactDOM from "react-dom";
import Routing from "./Routing";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import reducer from "./reducers";
import rootSaga from "./sagas";

let sagaMiddleware = createSagaMiddleware();
let store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);
