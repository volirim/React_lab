import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import ErrorBoundary from "./components/Error/Error";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";
import HocRoute from "./components/Routes/HocRoute/HocRoute";

const About = React.lazy(() => import("./pages/About"));
const Products = React.lazy(() => import("./pages/Products"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Cart = React.lazy(() => import("./pages/Cart"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));

const MainApp = React.memo(() => (
  <>
    <Header />
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HocRoute Child={Home} />} />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <Products />
              </Suspense>
            </PrivateRoute>
          }
        >
          <Route path=":platform" />
        </Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </Suspense>
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Suspense fallback={<div>Loading...</div>}>
                <Cart />
              </Suspense>
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>
    </ErrorBoundary>
    <Footer />
  </>
));

export default MainApp;
