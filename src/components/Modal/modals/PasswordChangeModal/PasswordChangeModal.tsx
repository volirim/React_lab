import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import ModalRoot from "@/components/Modal/ModalBase/ModalBase";
import hideButton from "@/utils/hideSubmitButton";
import styles from "../../ModalBase/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";
import store from "@/store/store";
import passwordChangeValidation from "@/utils/validators/passwordChangeValidation";

interface DataInterface {
  password: string;
  passwordConfirm: string;
}

const PasswordChangeModal = function () {
  const { register, handleSubmit } = useForm();
  const { search } = useLocation();
  const navigate = useNavigate();
  const { id } = store.getState().profile;

  const handleClick = () => {
    closeModal(search, navigate);
  };

  const onSubmit = async (data: DataInterface) => {
    const result = await passwordChangeValidation(data);
    if (result) {
      alert("Смена данных произошла успешно");
      closeModal(search, navigate);
    } else {
      alert("Что-то пошло не так");
    }
  };

  return (
    <ModalRoot>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div onClick={handleClick} className={styles.closeButtonWrapper}>
          <div className={styles.closeButton}>
            <div className={styles.closeLeftTop} />
            <div className={styles.closeRightTop} />
          </div>
        </div>
        <label className="formTitle">Change Password</label>
        <input {...register("password")} placeholder="password" type="text" className={styles.input} />
        <input {...register("passwordConfirm")} placeholder="repeat password" type="text" className={styles.input} />
        <input type="submit" value="submit" className="submitFormButton" onClick={hideButton} />
      </form>
    </ModalRoot>
  );
};

export default PasswordChangeModal;
