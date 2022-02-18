import React from "react";
import valve from "../../assets/images/footerImages/valveLogo.png";
import blizzard from "../../assets/images/footerImages/blizzardLogo.png";
import riotgames from "../../assets/images/footerImages/riotGamesLogo.png";
import styles from "./Footer.module.scss";

const Footer: React.FC = React.memo(() => (
  <footer className={styles.container}>
    <p className={styles.title}>Incredible convenient</p>
    <ul className={styles.imagesBlock}>
      <a href="https://www.valvesoftware.com" target="blank" rel="nofollow" className={styles.img}>
        <img src={valve} alt="" className={styles.img} />
      </a>
      <a href="https://www.riotgames.com/en" target="blank" rel="nofollow" className={styles.img}>
        <img src={riotgames} alt="" className={styles.img} />
      </a>
      <a href="https://www.blizzard.com" target="blank" rel="nofollow" className={styles.img}>
        <img src={blizzard} alt="" className={styles.img} />
      </a>
    </ul>
  </footer>
));

export default Footer;
