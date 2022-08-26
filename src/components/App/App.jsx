import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import AboutPage from "../AboutPage";
import BuyTicketsPage from "../BuyTicketsPage";
import NavBar from "../NavBar";
import HomePage from "../HomePage";

const App = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutPage />
      <BuyTicketsPage />
    </>
  );
};

export default App;
