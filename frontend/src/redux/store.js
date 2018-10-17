import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reducers from "../redux/reducers";
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();

let history;
let routeMiddleware;
let middlewares;

if (typeof window === "undefined") {
  // SSR
  middlewares = [thunk, sagaMiddleware];
} else {
  // Browser
  history = createHistory();
  routeMiddleware = routerMiddleware(history);
  middlewares = [thunk, sagaMiddleware, routeMiddleware];
}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export { store, history };
