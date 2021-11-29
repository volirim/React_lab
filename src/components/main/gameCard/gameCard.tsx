import card from "./game.module.scss";
import ApiObject from "@/types/Mockapi";

const GameCard = function (props: ApiObject) {
  return (
    <div className={card.card}>
      <div className={card.side}>
        <div>
          <div>{props.name}</div>
          <div>{props.price}</div>
        </div>
        <div>{props.rating}</div>
      </div>
      <div className={`${card.side} ${card.back}`}>
        <div>{props.description}</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default GameCard;
