import card from "./game.module.scss";

const GameCard = function () {
  return (
    <div className={card.card}>
      <div className={card.side}>
        <div>
          <div>asd</div>
          <div>24.99</div>
        </div>
        <div>rating</div>
      </div>
      <div className={`${card.side} ${card.back}`}>
        <div>descriptionasdasdajsdjasjdjasjdjasdjdjasasdjdjasjsadjasjsdajjsajasjdasj</div>
        // eslint-disable-next-line react/button-has-type
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default GameCard;
