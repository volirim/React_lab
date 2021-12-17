import { ComponentType, Dispatch, SetStateAction } from "react";
import { useLocation } from "react-router";
import MODAL_LIST from "@/constants/modalList";

type hocRouteProps = {
  Child: ComponentType;
  updateUserStatus: Dispatch<SetStateAction<boolean>>;
};

const HocRoute = function ({ Child, updateUserStatus }: hocRouteProps) {
  const { search } = useLocation();
  const modalParam = new URLSearchParams(search).get("modal");
  const Modal = MODAL_LIST[modalParam || "nothing"];
  return (
    <>
      <Child />
      <Modal updateUserStatus={updateUserStatus} />
    </>
  );
};

export default HocRoute;
