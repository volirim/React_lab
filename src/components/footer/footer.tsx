import valve from "../../assets/images/footerImages/valveLogo.png";
import blizzard from "../../assets/images/footerImages/blizzardLogo.png";
import riotgames from "../../assets/images/footerImages/riotGamesLogo.png";
import footer from "./footer.module.scss";
import title from "./modules/title.module.scss";
import links from "./modules/links.module.scss";

const Footer: React.FC = function () {
  return (
    <footer className={footer.container}>
      <p className={title.title}>Incredible convenient</p>
      <ul className={links.imagesBlock}>
        <a href="https://www.valvesoftware.com" target="blank" className={links.img}>
          <img src={valve} alt="" className={links.img} />
        </a>
        <a href="https://www.riotgames.com/en" target="blank" className={links.img}>
          <img src={riotgames} alt="" className={links.img} />
        </a>
        <a href="https://www.blizzard.com" target="blank" className={links.img}>
          <img src={blizzard} alt="" className={links.img} />
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
