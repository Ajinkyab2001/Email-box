import React, { useState } from "react";
import AuthContext from "./Authcontext";
import { useNavigate } from "react-router-dom";

function AuthcontextProvider(props) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  const updateTheToken = (receivedToken) => {
    setToken(receivedToken);
  };

  const isLoggedIn = token !== null;

  const logoutHandler = () => {
    setToken(null);
    navigate('/authentication'); // Corrected navigation
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  return (
    <AuthContext.Provider
      value={{ token, updateTheToken, isLoggedIn, logoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthcontextProvider;