import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "../HomePage";
import BuyTicketsPage from "../BuyTicketsPage";
import AboutPage from "../AboutPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/buy_tickets" element={<BuyTicketsPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
