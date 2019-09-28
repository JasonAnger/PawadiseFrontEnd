import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import appReducers from "./reducers/index";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { actGetProfile } from "./actions";
import jwt_decode from "jwt-decode";

import "./sass/main.scss";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducers, composeEnhancer(applyMiddleware(thunk)));

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(actGetProfile(jwt_decode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
