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
  account: {
    name: "Profile",
    path: "/profile",
  },
  cart: {
    name: "Cart",
    path: "/cart",
  },
  exit: {
    name: "LogOut",
    isModal: true,
    path: `?modal=logOut`,
  },
};
