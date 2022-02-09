import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./GameCard.module.scss";
import GameCardType from "@/types/mockapi";
import Rating from "./Rating";
import addGameToCart from "@/utils/cart/addGameToCart";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import { isAdminSelector } from "@/redux/modules/userProfile/selectors";
import { setGameCard } from "@/redux/modules/gameCardEditor/gameCardEditor";

interface GameCard {
  data: GameCardType;
  urlAddress: string | undefined;
}

const GameCard = function ({ data, urlAddress }: GameCard) {
  const store = useSelector((state: StoreInterface) => state);
  const isAdmin = isAdminSelector(store);
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.side}>
        <img src={data.img} alt="overwatch" className={styles.image} />
        <div className={styles.front}>
          <div>{data.name.toUpperCase()}</div>
          <div>{data.price[0] === "0" ? data.price.slice(1) : data.price}$</div>
        </div>
        <div className={styles.categories}>{Object.keys(data.categories).join(", ")}</div>
        <div className={styles.flexible} />
        <Rating rating={data.rating} />
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <div>{data.description}</div>
        <div className={isAdmin ? styles.buttonsContainer : ""}>
          <button className={styles.button} type="button" onClick={() => addGameToCart(data.name, data.categories)}>
            Add to cart
          </button>
          {isAdmin ? (
            <NavLink
              className={styles.button}
              to="?modal=editGameCard"
              onClick={() => dispatch(setGameCard({ ...data, params: { url: urlAddress, typeOfEvent: "editEvent" } }))}
            >
              Edit
            </NavLink>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
