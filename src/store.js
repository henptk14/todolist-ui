import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;

// const initalState = {};
// const middleware = [thunk];

// let store;

// const ReactReduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
//   store = createStore(
//     reducers,
//     initalState,
//     compose(applyMiddleware(...middleware), ReactReduxDevTools)
//   );
// } else {
//   store = createStore(
//     reducers,
//     initalState,
//     compose(applyMiddleware(...middleware))
//   );
// }

// export default store;
