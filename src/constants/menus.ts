import ROUTES from "./Routes";

const HEADER_MENU = [
  ROUTES.main,
  {
    ...ROUTES.products.base,
    sub: [ROUTES.products.pc, ROUTES.products.playstation, ROUTES.products.xbox],
  },
  ROUTES.about,
  ROUTES.signIn,
  ROUTES.signUp,
];

export default HEADER_MENU;
