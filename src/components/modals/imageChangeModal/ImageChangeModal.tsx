import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "../signOutModal/SignOutModal.module.scss";
import ModalRoot from "@/components/modal/ModalBase";
import modalStyles from "../../modal/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";
import changeMockapiData from "@/api/changeMockapiData";
import store from "@/redux/store";

interface DataInterface {
  source: string;
}

const ImageChangeModal = function () {
  const { register, handleSubmit } = useForm();
  const { search } = useLocation();
  const navigate = useNavigate();

  const { id, login, description, password } = store.getState().profile;

  const handleClick = () => {
    closeModal(search, navigate);
  };

  const onSubmit = (data: DataInterface) =>
    changeMockapiData({
      id,
      login,
      password,
      description,
      source: data.source,
    });

  return (
    <ModalRoot>
      <div className={styles.container}>
        <div onClick={handleClick} className={modalStyles.closeButtonWrapper}>
          <div className={modalStyles.closeButton}>
            <div className={modalStyles.closeLeftTop} />
            <div className={modalStyles.closeRightTop} />
          </div>
        </div>
        <p className={styles.title}>Incert link to image</p>
        <div className={styles.buttonsContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("source")} placeholder="an image link" />
            <button type="submit">confirm</button>
          </form>
        </div>
      </div>
    </ModalRoot>
  );
};

export default ImageChangeModal;
