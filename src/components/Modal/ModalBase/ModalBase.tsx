import ReactDOM from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ModalBase.module.scss";
import closeModal from "@/utils/closeModal";

const ModalRoot = function ({ children }: unknown) {
  const { search } = useLocation();
  const navigate = useNavigate();

  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = event.target as Element;
    return target.className === styles.bottomContent && closeModal(search, navigate);
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
