import { ComponentType } from "react";
import { useLocation } from "react-router";
import MODAL_LIST from "@/constants/modalList";

type hocRouteProps = {
  Child: ComponentType;
};

const HocRoute = function ({ Child }: hocRouteProps) {
  const { search } = useLocation();
  const modalParam = new URLSearchParams(search).get("modal");
  const Modal = MODAL_LIST[modalParam || "nothing"];
  return (
    <>
      <Child />
      <Modal />
    </>
  );
};

export default HocRoute;
