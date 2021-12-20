import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainApp from "./MainApp";

import "./assets/styles/main.scss";

// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334

class App extends React.Component {
  render() {
    return <MainApp />;
  }
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
