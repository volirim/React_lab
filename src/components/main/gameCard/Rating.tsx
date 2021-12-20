import styles from "./Rating.module.scss";
import RatingInterface from "@/types/ratingInterface";

const Rating = function ({ rating }: RatingInterface) {
  const starsArray = [];
  for (let i = 0; i < parseInt(rating, 10); i++) {
    starsArray.push(
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Orange_star.svg" alt="*" className={styles.star} />
    );
  }
  return <div className={styles.block}>{starsArray}</div>;
};

export default Rating;
