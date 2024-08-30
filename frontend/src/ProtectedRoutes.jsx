/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  if (!localStorage.getItem("userInfo")) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;
