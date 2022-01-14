import styles from "./GameCard.module.scss";
import GameCardType from "@/types/mockapi";
import Rating from "./Rating";

const GameCard = function (props: GameCardType) {
  return (
    <div className={styles.card}>
      <div className={styles.side}>
        <img src={props.img} alt="overwatch" className={styles.image} />
        <div className={styles.front}>
          <div>{props.name.toUpperCase()}</div>
          <div>{props.price}$</div>
        </div>
        <div className={styles.categories}>{props.categories.join(", ")}</div>
        <div className={styles.flexible} />
        <Rating rating={props.rating} />
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <div>{props.description}</div>
        <button className={styles.button} type="button" onClick={() => alert("Good product")}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GameCard;
