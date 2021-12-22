import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./SignOutModal.module.scss";
import setStorageData from "../../../utils/setStorageData";
import ModalRoot from "@/components/modal/ModalBase";
import modalStyles from "../../modal/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";

const SignOutModal = function () {
  const { search } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleClick = () => {
    closeModal(search, navigate);
  };

  return (
    <ModalRoot>
      <div className={styles.container}>
        <div onClick={handleClick} className={modalStyles.closeButtonWrapper}>
          <div className={modalStyles.closeButton}>
            <div className={modalStyles.closeLeftTop} />
            <div className={modalStyles.closeRightTop} />
          </div>
        </div>
        <p className={styles.title}>Are you sure you want to exit?</p>
        <div className={styles.buttonsContainer}>
          <NavLink
            to="/"
            className={styles.button}
            onClick={() => dispatch({ type: "CHECK", payload: setStorageData(false) })}
          >
            Yes
          </NavLink>
          <button type="button" className={styles.link} onClick={() => history.back()}>
            No
          </button>
        </div>
      </div>
    </ModalRoot>
  );
};

export default SignOutModal;
