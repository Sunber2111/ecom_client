import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "app/store";
import { createBrowserHistory } from "history";
import "semantic-ui-css/semantic.min.css";
import ScrollToTop from "app/layout/ScrollToTop";
import "react-toastify/dist/ReactToastify.css";

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Provider>
  </Router>,
  document.getElementById("root")
);
