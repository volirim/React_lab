import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { UserRegisterInterface } from "@/types/userData";
import performSubmit from "./navigateConstant";
import ModalRoot from "@/components/modal/ModalBase";
import styles from "../../modal/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";
import hideButton from "@/utils/hideSubmitButton";
import checkAuthAction from "@/redux/modules/auth/actionCreate";
import authActions from "@/redux/modules/auth/actions";

const SignUpModal = function () {
  const { register, handleSubmit } = useForm<UserRegisterInterface>();
  const navigate = useNavigate();
  const { search } = useLocation();
  const dispatch = useDispatch();

  const navigateFunction = async (data: UserRegisterInterface) => {
    if (await performSubmit(data)) {
      dispatch(checkAuthAction(authActions.IS_AUTHORISED_ACTION, true));
      return setTimeout(() => navigate("/profile"), 400);
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
