import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./fAuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    alert("Please login to continue");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
