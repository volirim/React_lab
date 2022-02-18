import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styles from "../SignOutModal/SignOutModal.module.scss";
import ModalRoot from "@/components/Modal/ModalBase/ModalBase";
import modalStyles from "../../ModalBase/ModalBase.module.scss";
import closeModal from "@/utils/closeModal";
import changeMockapiData from "@/api/changeMockapiData";
import store from "@/store/store";
import { changeProfileImage } from "@/store/modules/userProfile/actionCreate";

interface DataInterface {
  source: string;
}

const ImageChangeModal = function () {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { search } = useLocation();
  const navigate = useNavigate();

  const { id, login, description, password, isAdmin } = store.getState().profile;

  const handleClick = () => {
    closeModal(search, navigate);
  };

  const onSubmit = async (data: DataInterface) => {
    const newData = {
      id,
      login,
      password,
      description,
      isAdmin,
      source: data.source,
    };

    await changeMockapiData(newData);
    dispatch(changeProfileImage(newData));
    handleClick();
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
