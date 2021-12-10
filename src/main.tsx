import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./styles/main.css";
import "./styles/main.scss";
import "./assets/globalStyles/mainPage.scss";

// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334

import MainComponent from "./app";

class App extends React.Component {
  render() {
    return <MainComponent />;
  }
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
