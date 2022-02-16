import uniqID from "uniqid";
import React from "react";
import styles from "./Rating.module.scss";
import RatingInterface from "@/types/ratingInterface";

const Rating = React.memo(({ rating }: RatingInterface) => {
  const starsArray = [];
  for (let i = 0; i < parseInt(rating, 10); i++) {
    starsArray.push(
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Orange_star.svg"
        alt="*"
        key={uniqID()}
        className={styles.star}
      />
    );
  }
  return <div className={styles.block}>{starsArray}</div>;
});

export default Rating;
