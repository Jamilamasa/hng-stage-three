import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../Hooks/Auth";
import { SIGNIN } from "./Routers";

const ProtectedComponent = ({ children }) => {
  const [user, loading, error] = useUser();


  if (!user && !loading) {
    return <Navigate to={SIGNIN} />;
  }
  return <>{children}</>;
};

export default ProtectedComponent;
