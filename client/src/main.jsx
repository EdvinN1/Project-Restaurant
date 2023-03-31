import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Menu from '../pages/menuPage'
import Home from '../pages/HomePage.jsx'

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
            <Route path="Menu" element={<Menu />} />

          </Route>
        )
      )
    } />
  </React.StrictMode>
);