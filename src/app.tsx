import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ErrorBoundary from "./components/error/error";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/main/homePage";
import About from "./components/main/aboutPage";
import Products from "./components/main/productsPage";
import Profile from "./components/main/profilePage";

const MainComponent = function () {
  const [userStatus, setUserStatus] = useState<boolean>(false);

  const updateUserStatus = (newStatus: boolean | ((prevState: boolean) => boolean)) => setUserStatus(newStatus);

  if (!userStatus) {
    return (
      <>
        <Header userStatus={userStatus} />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home modalIsOpen={false} updateUserStatus={updateUserStatus} />} />
            <Route path="/login" element={<Home modalIsOpen updateUserStatus={updateUserStatus} />} />
            <Route path="/register" element={<Home modalIsOpen updateUserStatus={updateUserStatus} />} />
            <Route path="*" element={<Navigate to="/login" />} />;
          </Routes>
        </ErrorBoundary>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header userStatus={userStatus} />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home modalIsOpen={false} updateUserStatus={updateUserStatus} />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/" element={<Products />}>
            <Route path=":platform" />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/exit" element={<Home modalIsOpen updateUserStatus={updateUserStatus} />} />
          <Route path="*" element={<Navigate to="/" />} />;
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default MainComponent;
