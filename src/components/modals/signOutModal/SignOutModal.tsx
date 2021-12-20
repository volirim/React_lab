import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { SetUserStatusInterface } from "@/types/userStatusInterface";
import styles from "./signOutModal.module.scss";
import setStorageData from "../../../utils/setStorageData";
import ModalRoot from "@/components/modal/ModalBase";
import modal from "../../modal/modal.module.scss";

const SignOutModal = function ({ updateUserStatus }: SetUserStatusInterface) {
  const { search } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const urlParams = new URLSearchParams(search);
    urlParams.delete("modal");
    return navigate(urlParams.toString());
  };

  return (
    <ModalRoot>
      <div className={styles.container}>
        <div onClick={handleClick} className={modal.closeButtonWrapper}>
          <div className={modal.closeButton}>
            <div className={modal.closeLeftTop} />
            <div className={modal.closeRightTop} />
          </div>
        </div>
        <p className={styles.title}>Are you sure you want to exit?</p>
        <div className={styles.buttonsContainer}>
          <NavLink to="/" className={styles.button} onClick={() => updateUserStatus(setStorageData(false))}>
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
