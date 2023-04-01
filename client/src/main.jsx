import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from '../pages/homePage.jsx'
import AboutUs from '../pages/aboutUsPage'
import CreateAccount from '../pages/createAccountPage'
import Login from '../pages/loginPage'

import {  
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={
          createBrowserRouter(
              createRoutesFromElements(
                  <Route path="/" element={<App />}>
                  <Route index element={<Home />}></Route>    
                  <Route path='/about-us' element={<AboutUs />}></Route>
                  <Route path='/create-account' element={<CreateAccount />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                  </Route>
              )
          )
      } />
  </React.StrictMode>
);