import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./MainApp";

import "./assets/styles/main.scss";
import store from "./redux/authorisation";

// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainApp />;
      </Provider>
    );
  }
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
