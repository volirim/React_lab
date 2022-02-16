import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import ModalRoot from "@/components/Modal/ModalBase/ModalBase";
import hideButton from "@/utils/hideSubmitButton";
import styles from "../../ModalBase/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";
import store from "@/store/store";
import deleteMockapiData from "@/api/deleteMockapiData";
import passwordChangeValidation from "@/utils/validators/passwordChangeValidation";
import { ENDPOINTS } from "@/constants/mockapiURL";

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

  const onSubmit = (data: DataInterface) => passwordChangeValidation(data);

  deleteMockapiData(id, ENDPOINTS.user);
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
        <input type="submit" value="submit" className="submitFormButton" onClick={(e) => hideButton(e)} />
      </form>
    </ModalRoot>
  );
};

export default PasswordChangeModal;
