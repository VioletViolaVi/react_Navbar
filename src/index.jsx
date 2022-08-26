import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";
import Footer from "./components/Footer";
import GoBackBtn from "./components/GoBackBtn";
import NavBar from "./components/NavBar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoBackBtn />
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
