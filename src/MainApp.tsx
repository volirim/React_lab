import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/error/Error";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import HocRoute from "./components/HocRoute";
import Profile from "./components/pages/Profile";
import NotFoundPage from "./components/pages/NotFound";

const MainApp = function () {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HocRoute Child={Home} />} />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          >
            <Route path=":platform" />
          </Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />;
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MainApp;