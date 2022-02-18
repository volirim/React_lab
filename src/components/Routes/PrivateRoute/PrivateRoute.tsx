import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
import React, { ReactElement, useEffect } from "react";
import MODAL_LIST from "@/constants/modalList";
import { StoreInterface } from "@/store/modules/reducersCombined";
import clearFiltersFunction from "@/utils/clearFiltersFunction";

interface PrivateRouteInterface {
  children: ReactElement;
}

const PrivateRoute = React.memo(({ children }: PrivateRouteInterface) => {
  const { search } = useLocation();
  const modalParam = new URLSearchParams(search).get("modal");
  const Modal = MODAL_LIST[modalParam || "nothing"];

  const authorised = useSelector((state: StoreInterface) => state.auth.authorised);

  useEffect(() => {
    function clearStore() {
      clearFiltersFunction();
    }
    clearStore();
  }, []);

  return authorised ? (
    <>
      {children}
      <Modal />
    </>
  ) : (
    <Navigate to="/?modal=login" />
  );
});

export default PrivateRoute;
