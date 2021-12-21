import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import { UserRegisterInterface } from "@/types/userData";
import performSubmit from "./navigateConstant";
import ModalRoot from "@/components/modal/ModalBase";
import styles from "../../modal/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";
import hideButton from "@/utils/hideSubmitButton";
import UserStatusContext from "@/context/userStatusContext";

const SignUpModal = function () {
  const { register, handleSubmit } = useForm<UserRegisterInterface>();
  const navigate = useNavigate();
  const { search } = useLocation();
  const { setUserStatus } = useContext(UserStatusContext);

  const navigateFunction = async (data: UserRegisterInterface) => {
    if (await performSubmit(data)) {
      setUserStatus(true);
      return setTimeout(() => navigate("/profile"), 300);
    }
    return false;
  };

  const handleClick = () => {
    closeModal(search, navigate);
  };

  return (
    <ModalRoot>
      <form onSubmit={handleSubmit(navigateFunction)} className="form">
        <div onClick={handleClick} className={styles.closeButtonWrapper}>
          <div className={styles.closeButton}>
            <div className={styles.closeLeftTop} />
            <div className={styles.closeRightTop} />
          </div>
        </div>
        <label className="formTitle">Registration</label>
        <input {...register("login")} placeholder="login" type="text" className={styles.input} />
        <input {...register("password")} placeholder="password" type="password" className={styles.input} />
        <input
          {...register("passwordConfirm")}
          placeholder="confirm password"
          type="password"
          className={styles.input}
        />
        <input type="submit" value="submit" className="submitFormButton" onClick={hideButton} />
      </form>
    </ModalRoot>
  );
};

export default SignUpModal;
