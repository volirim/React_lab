import "./styles/main.css";
import "./styles/main.scss";
import "./components/header/header.scss";
import "./components/header/modules/navMenu/menu.scss";
import "./components/footer/footer.scss";
import "./components/main/mainPage.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/main/homePage";
import About from "./components/main/aboutPage";
import Products from "./components/main/productsPage";
import SignIn from "./components/main/signInPage";
import SignUp from "./components/main/signUpPage";

const App: React.FC = function () {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

console.log(<App />);

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
