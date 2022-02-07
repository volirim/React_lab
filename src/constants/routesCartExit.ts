import uniqid from "uniqid";

export const cart = {
  name: `Cart`,
  path: "/cart",
  id: uniqid(),
};

export const exit = {
  name: "LogOut",
  isModal: true,
  path: `?modal=logOut`,
  id: uniqid(),
};
