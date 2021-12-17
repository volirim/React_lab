import { NavLink } from "react-router-dom";
import { SetUserStatusInterface } from "@/types/userStatusInterface";
import styles from "./signOutModal.module.scss";
import setStorageData from "../../../utils/setStorageData";
import ModalRoot from "@/components/modal/ModalBase";

const SignOutModal = function ({ updateUserStatus }: SetUserStatusInterface) {
  return (
    <ModalRoot>
      <div className={styles.container}>
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
