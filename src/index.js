import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import reducers from './store/reducers';
import promise from 'redux-promise';

import './assets/sass/style.scss';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore); //promise로 만든 createStore
// const store = createStore(reducers);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
