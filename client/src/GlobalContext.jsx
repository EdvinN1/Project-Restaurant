import React, { createContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStates } from 'react-easier';

export const GlobalContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
  navigate: null,
  userData: null,
  setUserData: () => {}
});

export const GlobalProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Check if user data is stored in local storage
    if(localStorage.getItem('userData')) {
      // Retrieve the user data from local storage
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
      
      // Set the user data state variable
      setUserData(storedUserData);
      
      // Set the authentication status state variable to true
      setLoggedIn(true);
    }
  }, []);

  const updateLoggedIn = (loggedIn) => {
    setLoggedIn(loggedIn);
  };

  const access = useStates("access");

  const handleLogin = (userData) => {
    setUserData(userData);
    setLoggedIn(true);
    access.admin = userData.admin;
    access.loggedIn = true;

    // Store the user data in local storage
    localStorage.setItem('userData', JSON.stringify(userData));

    navigate("/");
  };

  const handleLogout = async () => {
    const rawResponse = await fetch('/api/login', {
      method: 'DELETE'
    });
    const response = await rawResponse.json();
    setLoggedIn(false);
    setUserData(null);
    access.admin = false;
    access.loggedIn = false;
    console.log(response);
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <GlobalContext.Provider value={{ 
        loggedIn, 
        updateLoggedIn, 
        navigate,
        handleLogin,
        handleLogout,
        access,
        userData,
        setUserData
        }}>
      {children}
    </GlobalContext.Provider>
  );
};
