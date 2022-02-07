import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HocRoute from "./components/HocRoute";
import Profile from "./pages/Profile";
import NotFoundPage from "./pages/NotFound";
import Cart from "./pages/Cart";

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
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MainApp;
