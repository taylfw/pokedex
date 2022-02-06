import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getPokemon } from "../api/";

const SinglePokemon = ({ data }) => {
  console.log(data);
  return (
    <header>
      <h1>Single Pokemon Component</h1>
    </header>
  );
};

export default SinglePokemon;
