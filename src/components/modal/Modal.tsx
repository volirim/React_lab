import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { SetUserStatusInterface } from "@/types/UserStatusInterface";
import modal from "./modal.module.scss";
import ModalWindow from "./modalWindow/ModalWindow";

const ModalRoot = function ({ updateUserStatus }: SetUserStatusInterface) {
  document.body.setAttribute("style", "overflow: hidden");
  const modalElement = document.getElementById("modal")!;

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
    modalElement
  );
};

export default ModalRoot;
