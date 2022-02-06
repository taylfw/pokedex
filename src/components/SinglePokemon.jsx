import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getSpecies } from "../api/";

const SinglePokemon = ({ data, image, description }) => {
  const [species, setSpecies] = useState([]);

  const name = data.name;

  return (
    <header>
      <h1>{name}</h1>
      <img src={image}></img>
      <p>{description}</p>
    </header>
  );
};

export default SinglePokemon;
