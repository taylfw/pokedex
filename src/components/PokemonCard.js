import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  const name = pokemon.name;
  return (
    <div>
      <Link to={`/single_pokemon/${pokemon.id}`}>
        <p>{name}</p>
        <img src={pokemon.sprites.back_default} />
      </Link>
    </div>
  );
};

export default PokemonCard;
