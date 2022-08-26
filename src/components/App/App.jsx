import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import NavBar from "../NavBar";
import HomePage from "../HomePage";
import BuyTicketsPage from "../BuyTicketsPage";
import AboutPage from "../AboutPage";
import Footer from "../Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutPage />
      <BuyTicketsPage />
      <Footer />
    </>
  );
};

export default App;
