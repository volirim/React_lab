import ROUTES from "./Routes";
import ROUTES_AUTHORISED from "./RoutesAuthorised";

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

const HEADER_MENU_AUTHORISED = [
  ROUTES_AUTHORISED.main,
  {
    ...ROUTES_AUTHORISED.products.base,
    SUB_MENU,
  },
  ROUTES_AUTHORISED.about,
  ROUTES_AUTHORISED.account,
  ROUTES_AUTHORISED.cart,
  ROUTES_AUTHORISED.exit,
];

export { HEADER_MENU, SUB_MENU, HEADER_MENU_AUTHORISED };
