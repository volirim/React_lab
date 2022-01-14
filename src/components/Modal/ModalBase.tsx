import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ModalBase.module.scss";
import { setClass } from "@/utils/classes";
import closeModal from "@/utils/closeModal";

const ModalRoot = function ({ children }: unknown) {
  setClass("body", "modalOpened");
  const { search } = useLocation();
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleClick(event: any) {
    return event.target.className === styles.bottomContent && closeModal(search, navigate);
  }

  return ReactDOM.createPortal(
    <div className={styles.container} onClick={(e) => handleClick(e)}>
      <div className={styles.bottomContent}>
        <div className={styles.innerContainer}>{children}</div>
      </div>
    </div>,
    document.getElementById("modals")!
  );
};

export default ModalRoot;
