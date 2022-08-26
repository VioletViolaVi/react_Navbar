import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./navbar.css";

const NavBar = () => {
  const activeLink = {color: "#f0f0f0"};

  function toggleActive({isActive}) {
    if (isActive) {
      return activeLink;
    } else{
      return undefined;
    }
  }

  return (
    <>
      <nav className="nav_bar">
        <ul>
          <li>
            <NavLink to={"/"} style={toggleActive}>Home |</NavLink>
          </li>
          <li>
            <NavLink to={"buy_tickets"} style={toggleActive}>| Buy Tickets |</NavLink>
          </li>
          <li>
            <NavLink to={"about"} style={toggleActive}>| About</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
