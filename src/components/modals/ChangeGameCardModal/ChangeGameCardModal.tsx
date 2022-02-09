import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import uniqID from "uniqid";
import { useForm } from "react-hook-form";
import ModalRoot from "@/components/Modal/ModalBase";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import containerStyles from "../SignOutModal/SignOutModal.module.scss";
import activeGameSelector from "@/redux/modules/gameCardEditor/selectors";
import closeModal from "@/utils/closeModal";
import modalStyles from "../../Modal/ModalBase.module.scss";
import styles from "./ChangeGameCardModal.module.scss";
import AGES from "@/constants/filterNames/ages";
import GENRES from "@/constants/filterNames/genres";
import FormInterface from "@/types/formInterface";
import normalizeData from "@/utils/cardEditModal/normalizeData";
import { setGameCard } from "@/redux/modules/gameCardEditor/gameCardEditor";
import deleteMockapiData from "@/api/deleteMockapiData";
import { ENDPOINTS } from "@/constants/mockapiURL";
import createGameCardObject from "@/constants/gameCardObject";

const ChangeGameCardModal = function () {
  const store = useSelector((state: StoreInterface) => state);
  const dispatch = useDispatch();
  const activeGame = activeGameSelector(store);
  const { search } = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleClick = () => {
    closeModal(search, navigate);
    dispatch(setGameCard({ ...createGameCardObject(), params: { url: undefined, typeOfEvent: "setCard" } }));
  };

  const onSubmitHandler = async (data: FormInterface) => {
    const newData = { ...data };
    await normalizeData(newData, activeGame.id, activeGame.params.url, activeGame.params.typeOfEvent);
    dispatch(setGameCard({ ...createGameCardObject(), params: { url: undefined, typeOfEvent: "setCard" } }));
    closeModal(search, navigate);
  };

  const onDeleteHandler = async () => {
    const deleteCard = confirm("Are you sure?");
    if (deleteCard) {
      await deleteMockapiData(activeGame.id, activeGame.params.url ? ENDPOINTS.topGames : ENDPOINTS.games);
      closeModal(search, navigate);
      dispatch(setGameCard({ ...activeGame }));
    }
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
            <form id="changeGameCardForm" onSubmit={handleSubmit(onSubmitHandler)}>
              <div className={styles.inputContainer}>
                <h4>Name</h4>
                <input type="text" className={styles.input} defaultValue={activeGame.name} {...register("name")} />
              </div>
              <div className={styles.inputContainer}>
                <h4>Category</h4>
                <select
                  className={styles.input}
                  form="changeGameCardForm"
                  onChange={(e) => ({ ...register(`genres.${e.target.value}`) })}
                >
                  {GENRES.map((element) => (
                    <option
                      disabled={element === ""}
                      key={uniqID()}
                      selected={`${Object.keys(activeGame.genres)[0]}` === element}
                    >
                      {element}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.inputContainer}>
                <h4>Price</h4>
                <input type="text" className={styles.input} defaultValue={activeGame.price} {...register("price")} />
              </div>
              <div className={styles.inputContainer}>
                <h4>Image</h4>
                <input type="text" className={styles.input} defaultValue={activeGame.img} {...register("img")} />
              </div>
              <div className={styles.inputContainer}>
                <h4>Description</h4>
                <textarea
                  className={styles.description}
                  defaultValue={activeGame.description}
                  {...register("description")}
                />
              </div>
              <div className={styles.inputContainer}>
                <h4>Age</h4>
                <select className={styles.input} form="changeGameCardForm" {...register("age")}>
                  {AGES.map((element) => (
                    <option disabled={element === ""} key={uniqID()} selected={`${activeGame.age}+` === element}>
                      {element}
                    </option>
                  ))}
                </select>
              </div>
              <h4>Platform</h4>
              <div className={styles.inputContainer}>
                <h4>PC</h4>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={(e) => (e.target.value ? { ...register(`categories.pc`) } : null)}
                />
              </div>
              <div className={styles.inputContainer}>
                <h4>PlayStation 5</h4>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={(e) => (e.target.value ? { ...register(`categories.playstation`) } : null)}
                />
              </div>
              <div className={styles.inputContainer}>
                <h4>XBox One</h4>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onChange={(e) => (e.target.value ? { ...register(`categories.xbox`) } : null)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.buttonsBlock}>
          <button className="button" type="submit" form="changeGameCardForm">
            Submit
          </button>
          <button
            className="button"
            type="submit"
            onClick={() => (activeGame.params.typeOfEvent === "setCard" ? null : onDeleteHandler())}
          >
            Delete card
          </button>
        </div>
      </div>
    </ModalRoot>
  );
};

export default ChangeGameCardModal;
