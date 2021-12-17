import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import ErrorBoundary from "./components/error/Error";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import HocRoute from "./utils/HocRoute";
import Profile from "./components/pages/Profile";

const MainApp = function () {
  const status = JSON.parse(localStorage.getItem("authorised")!);
  const [userStatus, setUserStatus] = useState<boolean>(status);

  return (
    <>
      <Header userStatus={userStatus} />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HocRoute Child={Home} updateUserStatus={setUserStatus} />} />
          <Route
            path="/about"
            element={
              <PrivateRoute status={userStatus}>
                <HocRoute Child={About} updateUserStatus={setUserStatus} />
              </PrivateRoute>
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute status={userStatus}>
                <HocRoute Child={Products} updateUserStatus={setUserStatus} />
              </PrivateRoute>
            }
          >
            <Route path=":platform" />
          </Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute status={userStatus}>
                <HocRoute Child={Profile} updateUserStatus={setUserStatus} />
              </PrivateRoute>
            }
          />
          {/* <Route path="*" element={<Navigate to="/" />} />; */}
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MainApp;
