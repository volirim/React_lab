import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { SetUserStatusInterface } from "@/types/userStatusInterface";
import modal from "./modal.module.scss";
import ModalWindow from "./modalWindow/ModalWindow";
import { setClass } from "@/utils/setClass";

const ModalRoot = function ({ updateUserStatus }: SetUserStatusInterface) {
  setClass("body", "modalOpened");

  return ReactDOM.createPortal(
    <div className={modal.container}>
      <div className={modal.topContent}>
        <NavLink to="/">
          <div className={modal.closeButton}>
            <div className={modal.closeLeftTop} />
            <div className={modal.closeRightTop} />
          </div>
        </NavLink>
      </div>
      <div className={modal.bottomContent}>
        <ModalWindow updateUserStatus={updateUserStatus} />
      </div>
    </div>,
    document.getElementById("modals")!
  );
};

export default ModalRoot;
