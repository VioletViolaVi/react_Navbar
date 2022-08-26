import React from "react";

import "./navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="nav_bar">
        <h1>Nav Bar</h1>
        <ul>
          <li>Home</li>
          <li>Buy Tickets</li>
          <li>About</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
