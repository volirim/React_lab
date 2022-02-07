import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./GameCard.module.scss";
import GameCardType from "@/types/mockapi";
import Rating from "./Rating";
import addGameToCart from "@/utils/cart/addGameToCart";
import { StoreInterface } from "@/redux/modules/reducersCombined";
import { isAdminSelector } from "@/redux/modules/userProfile/selectors";
import { setGameCard } from "@/redux/modules/gameCardEditor/gameCardEditor";

const GameCard = function (props: GameCardType) {
  const store = useSelector((state: StoreInterface) => state);
  const isAdmin = isAdminSelector(store);
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <div className={styles.side}>
        <img src={props.img} alt="overwatch" className={styles.image} />
        <div className={styles.front}>
          <div>{props.name.toUpperCase()}</div>
          <div>{props.price[0] === "0" ? props.price.slice(1) : props.price}$</div>
        </div>
        <div className={styles.categories}>{Object.keys(props.categories).join(", ")}</div>
        <div className={styles.flexible} />
        <Rating rating={props.rating} />
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <div>{props.description}</div>
        <div className={isAdmin ? styles.buttonsContainer : ""}>
          <button className={styles.button} type="button" onClick={() => addGameToCart(props.name, props.categories)}>
            Add to cart
          </button>
          {isAdmin ? (
            <NavLink
              className={styles.button}
              type="button"
              to="?modal=editGameCard"
              onClick={() => dispatch(setGameCard({ ...props }))}
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
