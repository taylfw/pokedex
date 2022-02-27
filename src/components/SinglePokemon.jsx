import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { getSpecies } from "../api/";

const SinglePokemon = ({ allPokemon }) => {
  const { id } = useParams();
  const pokemon = allPokemon.find((element) => element.id == id);

  console.log(pokemon);

  const name = pokemon.name;
  const type = pokemon.types;

  return (
    <div>
      <h1>{name}</h1>
      <img src={pokemon.sprites.front_default} />
      {type.map((eachType, idx) => {
        return (
          <p key={`data in pokemon map: ${eachType} at ${idx}`}>
            {eachType.type.name}
          </p>
        );
      })}
    </div>
  );
};

export default SinglePokemon;
