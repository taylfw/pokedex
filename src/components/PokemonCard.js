import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const PokemonCard = ({ pokemon }) => {
  console.log(pokemon);

  const name = pokemon.name;
  return (
    <div>
      <Link to={"/single_pokemon"}>
        <p className="pokeName">{name}</p>
        <img src={pokemon.sprites.back_default} />
      </Link>
    </div>
  );
};

export default PokemonCard;
