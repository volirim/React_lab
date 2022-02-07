import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import ModalRoot from "@/components/Modal/ModalBase";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import containerStyles from "../SignOutModal/SignOutModal.module.scss";
import activeGameSelector from "@/redux/modules/gameCardEditor/selectors";
import closeModal from "@/utils/closeModal";
import modalStyles from "../../Modal/ModalBase.module.scss";
import styles from "./ChangeGameCardModal.module.scss";

const ChangeGameCardModal = function () {
  const store = useSelector((state: StoreInterface) => state);
  const activeGame = activeGameSelector(store);
  const { search } = useLocation();
  const navigate = useNavigate();

  console.log(activeGame.genres);

  const handleClick = () => {
    closeModal(search, navigate);
  };

  return (
    <ModalRoot>
      <div className={containerStyles.container}>
        <div className={styles.topContainer}>
          <div className={styles.title}>Edit Card</div>
          <div onClick={handleClick} className={modalStyles.closeButtonWrapper}>
            <div className={modalStyles.closeButton}>
              <div className={modalStyles.closeLeftTop} />
              <div className={modalStyles.closeRightTop} />
            </div>
          </div>
        </div>
        <div className={styles.bottomBlock}>
          <div>
            <h3 className={styles.imageTitle}>Card Image</h3>
            <img src={activeGame.img} alt="aboba" className={styles.image} />
          </div>
          <div className={styles.formContainer}>
            <h3>Information</h3>
            <form>
              <div className={styles.inputContainer}>
                <h4>Name</h4>
                <input type="text" className={modalStyles.input} defaultValue={activeGame.name} />
              </div>
              <div className={styles.inputContainer}>
                <h4>Category</h4>
                <input type="text" className={modalStyles.input} defaultValue={Object.keys(activeGame.genres)} />
              </div>
              <div className={styles.inputContainer}>
                <h4>Price</h4>
                <input type="text" className={modalStyles.input} defaultValue={activeGame.price} />
              </div>
              <div className={styles.inputContainer}>
                <h4>Image</h4>
                <input type="text" className={modalStyles.input} defaultValue={activeGame.img} />
              </div>
              <div className={styles.inputContainer}>
                <h4>Description</h4>
                <textarea className={styles.description} defaultValue={activeGame.description} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ModalRoot>
  );
};

export default ChangeGameCardModal;
