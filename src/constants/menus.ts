import ROUTES from "./Routes";

const SUB_MENU = [ROUTES.products.pc, ROUTES.products.playstation, ROUTES.products.xbox];

const HEADER_MENU = [
  ROUTES.main,
  {
    ...ROUTES.products.base,
    SUB_MENU,
  },
  ROUTES.about,
  ROUTES.signIn,
  ROUTES.signUp,
];

export { HEADER_MENU, SUB_MENU };
