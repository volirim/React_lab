import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "./SignOutModal.module.scss";
import ModalRoot from "@/components/Modal/ModalBase/ModalBase";
import modalStyles from "../../ModalBase/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";
import checkAuthAction from "@/store/modules/auth/actionCreate";
import checkProfileAction from "@/store/modules/userProfile/actionCreate";
import { defaultProfileState } from "@/store/modules/userProfile/reducer";
import { checkClearCartAction } from "@/store/modules/cart/actionCreate";

const SignOutModal = function () {
  const { search } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(checkAuthAction(false));
    dispatch(checkProfileAction(defaultProfileState));
    dispatch(checkClearCartAction());
  };

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
          <NavLink to="/" className={styles.button} onClick={() => logOut()}>
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
