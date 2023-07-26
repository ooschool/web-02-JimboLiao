import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./css/normalize.css";
import "./css/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./containers/Root/Root";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Products from "./containers/Products/Products";
import Cart from "./containers/Cart/Cart";
import Login from "./containers/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
