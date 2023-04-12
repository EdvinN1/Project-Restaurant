import React, { createContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStates } from 'react-easier';

export const GlobalContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  navigate: null
});

export const GlobalProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const updateLoggedIn = (loggedIn) => {
    setLoggedIn(loggedIn);
  };

  const access = useStates("access");

  const handleLogin = () => {
    navigate("/login")
    updateLoggedIn(true);
  };

  const handleLogout = async () => {
    const rawResponse = await fetch('/api/login', {
      method: 'DELETE'
    });
    const response = await rawResponse.json();
    sessionStorage.removeItem("loggedIn", response.loggedIn)
    sessionStorage.removeItem("admin", response.admin)
    updateLoggedIn(false);
    access.admin = false;
    access.loggedIn = false;
    console.log(response);
    navigate('/');
  };

  return (
    <GlobalContext.Provider value={{ 
        loggedIn, 
        updateLoggedIn, 
        navigate,
        handleLogin,
        handleLogout,
        access 
        }}>
      {children}
    </GlobalContext.Provider>
  );
};