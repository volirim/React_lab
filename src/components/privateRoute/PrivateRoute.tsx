import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
import MODAL_LIST from "@/constants/modalList";
import { DefaultStateInterface } from "@/redux/authorisation";

const PrivateRoute = function ({ children }: unknown) {
  const { search } = useLocation();
  const modalParam = new URLSearchParams(search).get("modal");
  const Modal = MODAL_LIST[modalParam || "nothing"];

  const authorised = useSelector((state: DefaultStateInterface) => state.authorised);

  return authorised ? (
    <>
      {children}
      <Modal />
    </>
  ) : (
    <Navigate to="/?modal=login" />
  );
};

export default PrivateRoute;
