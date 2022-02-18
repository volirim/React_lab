import uniqid from "uniqid";

export default {
  main: {
    name: "Home",
    path: "/",
    id: uniqid(),
  },
  products: {
    base: {
      name: "Products",
      path: "/products",
      id: uniqid(),
    },
    pc: {
      name: "pc",
      path: "/products/pc",
      id: uniqid(),
    },
    playstation: {
      name: "playstation",
      path: "/products/playstation",
      id: uniqid(),
    },
    xbox: {
      name: "xbox",
      path: "/products/xbox",
      id: uniqid(),
    },
  },
  about: {
    name: "About",
    path: "/about",
    id: uniqid(),
  },
  signIn: {
    name: "Login",
    isModal: true,
    path: `?modal=login`,
    id: uniqid(),
  },
  signUp: {
    name: "Register",
    isModal: true,
    path: `?modal=register`,
    id: uniqid(),
  },
};
