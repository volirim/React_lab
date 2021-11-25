import valve from "../../assets/images/footerImages/valveLogo.png";
import blizzard from "../../assets/images/footerImages/blizzardLogo.png";
import riotgames from "../../assets/images/footerImages/riotGamesLogo.png";

const Footer: React.FC = function () {
  return (
    <footer className="footer-container">
      <p className="footer__title">Incredible convenient</p>
      <ul className="footer__images-block">
        <a href="https://www.valvesoftware.com" target="blank" className="footer__img">
          <img src={valve} alt="" className="footer__img" />
        </a>
        <a href="https://www.riotgames.com/en" target="blank">
          <img src={riotgames} alt="" className="footer__img" />
        </a>
        <a href="https://www.blizzard.com" target="blank" className="footer__img">
          <img src={blizzard} alt="" className="footer__img" />
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
