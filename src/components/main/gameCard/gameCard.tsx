import card from "./game.module.scss";
import GameCardType from "@/types/Mockapi";
import Rating from "./starsRating/Rating";

const GameCard = function (props: GameCardType) {
  // console.log(props);

  return (
    <div className={card.card}>
      <div className={card.side}>
        <img src={props.img} alt="overwatch" className={card.image} />
        <div className={card.front}>
          <div>{props.name.toUpperCase()}</div>
          <div>{props.price}$</div>
        </div>
        <div className={card.categories}>{props.categories.join(", ")}</div>
        <div className={card.flexible} />
        <Rating rating={props.rating} />
      </div>
      <div className={`${card.side} ${card.back}`}>
        <div>{props.description}</div>
        <button className={card.button} type="button" onClick={() => alert("Good product")}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default GameCard;
