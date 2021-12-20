import { Navigate, useLocation } from "react-router";
import MODAL_LIST from "@/constants/modalList";

const PrivateRoute = function ({ children, status, updateUserStatus }: unknown) {
  const { search } = useLocation();
  const modalParam = new URLSearchParams(search).get("modal");
  const Modal = MODAL_LIST[modalParam || "nothing"];

  return status ? (
    <>
      {children}
      <Modal updateUserStatus={updateUserStatus} />
    </>
  ) : (
    <Navigate to="/?modal=login" />
  );
};

export default PrivateRoute;
