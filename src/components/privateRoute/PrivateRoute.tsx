import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import MODAL_LIST from "@/constants/modalList";
import UserStatusContext from "@/context/userStatusContext";

const PrivateRoute = function ({ children }: unknown) {
  const { search } = useLocation();
  const modalParam = new URLSearchParams(search).get("modal");
  const Modal = MODAL_LIST[modalParam || "nothing"];

  const { userStatus } = useContext(UserStatusContext);

  return userStatus ? (
    <>
      {children}
      <Modal />
    </>
  ) : (
    <Navigate to="/?modal=login" />
  );
};

export default PrivateRoute;
