import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import onSubmitLogin from "@/utils/signInFunc";
import { UserLoginInterface } from "@/types/userData";
import ModalRoot from "@/components/modal/ModalBase";
import styles from "../../modal/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";
import hideButton from "@/utils/hideSubmitButton";

const SignInModal = function () {
  const { register, handleSubmit } = useForm<UserLoginInterface>();
  const { search } = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signIn = async (data: UserLoginInterface) => {
    dispatch({ type: "CHECK", payload: await onSubmitLogin(data) });
    history.back();
  };

  const handleClick = () => {
    closeModal(search, navigate);
  };

  return (
    <ModalRoot>
      <form onSubmit={handleSubmit(signIn)} className="form">
        <div onClick={handleClick} className={styles.closeButtonWrapper}>
          <div className={styles.closeButton}>
            <div className={styles.closeLeftTop} />
            <div className={styles.closeRightTop} />
          </div>
        </div>
        <label className="formTitle">Authorisation</label>
        <input {...register("login")} placeholder="login" type="text" className={styles.input} />
        <input {...register("password")} placeholder="password" type="password" className={styles.input} />
        <input type="submit" value="submit" className="submitFormButton" onClick={hideButton} />
      </form>
    </ModalRoot>
  );
};

export default SignInModal;
