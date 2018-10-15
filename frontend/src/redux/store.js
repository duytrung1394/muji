import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";
import { routerReducer, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import createSagaMiddleware, {END} from "redux-saga";
import transit from 'transit-immutable-js';
import reducers from "../redux/reducers";
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleware();

let history;
let routeMiddleware;
let middlewares;
let initialData = {};

if( typeof(window) === "undefined" ){
  // SSR
  middlewares = [thunk, sagaMiddleware];
}else{
  // Browser
  history = createHistory();
  routeMiddleware = routerMiddleware(history);
  middlewares = [thunk, sagaMiddleware, routeMiddleware];
  if( document && document.getElementById('initial-data') ){
    initialData = transit.fromJSON(document.getElementById('initial-data').getAttribute('data-json'));
  }
}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  initialData,
  compose(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

// SSR向け。
// 参考1: https://blog.hiroppy.me/entry/ssr-sample
// 参考2: https://github.com/redux-saga/redux-saga/tree/2d8efbc7408d789132a28a21017eae4ea465772d/examples/real-world
store.runSaga = sagaMiddleware.run;
store.close = () => {
  store.dispatch(END);
};

export { store, history };
