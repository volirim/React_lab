import ReactDOM from "react-dom";
import modal from "./modal.module.scss";
import { setClass } from "@/utils/setClass";

const ModalRoot = function ({ children }: unknown) {
  setClass("body", "modalOpened");

  return ReactDOM.createPortal(
    <div className={modal.container}>
      <div className={modal.bottomContent}>
        <div className={modal.innerContainer}>{children}</div>
      </div>
    </div>,
    document.getElementById("modals")!
  );
};

export default ModalRoot;
