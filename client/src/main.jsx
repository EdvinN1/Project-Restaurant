import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from '../pages/HomePage.jsx'
import AboutUs from '../pages/aboutUsPage'

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
                  </Route>
              )
          )
      } />
  </React.StrictMode>
);