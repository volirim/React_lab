import card from "./game.module.scss";
import ApiObject from "@/types/Mockapi";

const GameCard = function (props: ApiObject) {
  return (
    <div className={card.card}>
      <div className={card.side}>
        <img src={props.img} alt="overwatch" className={card.image} />
        <div className={card.front}>
          <div>{props.name.toUpperCase()}</div>
          <div>{props.price}$</div>
        </div>
        <div>{props.rating} stars</div>
      </div>
      <div className={`${card.side} ${card.back}`}>
        <div>{props.description}</div>
        <button className={card.button}>Add to cart</button>
      </div>
    </div>
  );
};

export default GameCard;
