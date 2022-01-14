// import RouteData from "@/types/routeData";

export default {
  main: {
    name: "Home",
    path: "/",
  },
  products: {
    base: {
      name: "Products",
      path: "/products",
    },
    pc: {
      name: "pc",
      path: "/products/pc",
    },
    playstation: {
      name: "playstation",
      path: "/products/playstation",
    },
    xbox: {
      name: "xbox",
      path: "/products/xbox",
    },
  },
  about: {
    name: "About",
    path: "/about",
  },
  signIn: {
    name: "Login",
    isModal: true,
    path: `?modal=login`,
  },
  signUp: {
    name: "Register",
    isModal: true,
    path: `?modal=register`,
  },
};
