import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getPokemon } from "../api/";

const Header = () => {
  return (
    <header>
      <h1 className="pokeHeader">Pokedex</h1>
    </header>
  );
};

export default Header;
