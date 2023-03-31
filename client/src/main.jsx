import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from '../pages/homePage.jsx'

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
                  </Route>
              )
          )
      } />
  </React.StrictMode>
);