// dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "store";
// components
import App from "App";
//  import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  const initialState = {};
  const store = configureStore(initialState);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

renderApp();

// serviceWorker.register();
