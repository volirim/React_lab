import { NavLink } from "react-router-dom";
import { SetUserStatusInterface } from "@/types/UserStatusInterface";
import styles from "./signOutModal.module.scss";

const SignOutModal = function ({ updateUserStatus }: SetUserStatusInterface) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Are you sure you want to exit?</p>
      <div className={styles.buttonsContainer}>
        <NavLink to="/" className={styles.button} onClick={() => updateUserStatus(false)}>
          Yes
        </NavLink>
        <button type="button" className={styles.link} onClick={() => history.back()}>
          No
        </button>
      </div>
    </div>
  );
};

export default SignOutModal;
