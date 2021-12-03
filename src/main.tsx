import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/error/error";

import "./styles/main.css";
import "./styles/main.scss";
import "./assets/globalStyles/mainPage.scss";

// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/main/homePage";
import About from "./components/main/aboutPage";
import Products from "./components/main/productsPage";
import SignIn from "./components/main/signInPage";
import SignUp from "./components/main/signUpPage";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/" element={<Products />}>
              <Route path=":platform" />
            </Route>
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="*" element={<Navigate to="/" />} />;
          </Routes>
        </ErrorBoundary>
        <Footer />
      </>
    );
  }
}

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
