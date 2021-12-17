import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router";
import modal from "./modal.module.scss";
import { setClass } from "@/utils/setClass";

const ModalRoot = function ({ children }: unknown) {
  setClass("body", "modalOpened");
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleClick = () => {
    const urlParams = new URLSearchParams(search);
    urlParams.delete("modal");
    return navigate(urlParams.toString());
  };

  return ReactDOM.createPortal(
    <div className={modal.container}>
      <div className={modal.topContent}>
        <div onClick={handleClick} className={modal.closeButtonWrapper}>
          <div className={modal.closeButton}>
            <div className={modal.closeLeftTop} />
            <div className={modal.closeRightTop} />
          </div>
        </div>
      </div>
      <div className={modal.bottomContent}>
        <div className={modal.innerContainer}>{children}</div>
      </div>
    </div>,
    document.getElementById("modals")!
  );
};

export default ModalRoot;
