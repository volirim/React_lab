import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ErrorBoundary from "./components/error/Error";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Profile from "./components/pages/Profile";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

const MainApp = function () {
  const status = JSON.parse(localStorage.getItem("authorised")!);
  const [userStatus, setUserStatus] = useState<boolean>(status);

  return (
    <>
      <Header userStatus={userStatus} />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home updateUserStatus={setUserStatus} />} />
          <Route path="/register" element={<Home modalIsOpen updateUserStatus={setUserStatus} />} />
          <Route path="/login" element={<Home modalIsOpen updateUserStatus={setUserStatus} />} />
          <Route
            path="/about"
            element={
              <PrivateRoute status={userStatus}>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute status={userStatus}>
                <Products />
              </PrivateRoute>
            }
          >
            <Route path=":platform" />
          </Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute status={userStatus}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/exit"
            element={
              <PrivateRoute status={userStatus}>
                <Home modalIsOpen updateUserStatus={setUserStatus} />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />;
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MainApp;
