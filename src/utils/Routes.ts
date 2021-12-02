import RouteData from "@/types/routeData";

const routes: RouteData[] = [
  {
    name: "Home",
    path: "/",
    options: [],
  },
  {
    name: "Products",
    path: "/products",
    options: [
      {
        name: "pc",
        path: "/products/pc",
        options: [],
      },
      {
        name: "playstation",
        path: "/products/playstation",
        options: [],
      },
      {
        name: "xbox",
        path: "/products/xbox",
        options: [],
      },
    ],
  },
  {
    name: "About",
    path: "/about",
    options: [],
  },
  {
    name: "Login",
    path: "/login",
    options: [],
  },
  {
    name: "Register",
    path: "/register",
    options: [],
  },
];

export default routes;
