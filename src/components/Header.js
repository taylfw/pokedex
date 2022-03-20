import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getPokemon } from "../api/";
import { NavLinks } from "./HeaderElements";

const Header = () => {
  return (
    <header>

      <NavLink
        to="/poke_list"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
      >
        Poke List
      </NavLink>

    </header>
  );
};

export default Header;
// Frank was here...
// As was Robert
// Hannah was, too
