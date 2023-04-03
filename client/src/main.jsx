import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Menu from "../pages/menuPage";
import Home from "../pages/homePage.jsx";
import AboutUs from "../pages/aboutUsPage";
import AdminDashboard from "../pages/adminDashboard";
import Contact from "../pages/contactPage";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="Menu" element={<Menu />} />
            <Route path="/about-us" element={<AboutUs />}></Route>
            <Route path="/admin-section" element={<AdminDashboard />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Route>
        )
      )}
    />
  </React.StrictMode>
);
