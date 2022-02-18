import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import MainApp from "./MainApp";

import "./assets/styles/main.scss";

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <MainApp />
          </PersistGate>
        </Provider>
      </BrowserRouter>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
