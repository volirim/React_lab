import { Navigate } from "react-router";

const PrivateRoute = function ({ children, status }: unknown) {
  return status ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
