import React, { useState, useEffect, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { PokemonCard } from ".";

const AllPokemon = ({ allPokemon }) => {
  return (
    <div>
      {allPokemon && allPokemon.length
        ? allPokemon.map((pokemon, idx) => {
            return (
              <Fragment
                key={`Pokemon in main pokemon list ${pokemon.name} ${idx}`}
              >
                <PokemonCard pokemon={pokemon} />
              </Fragment>
            );
          })
        : null}
    </div>
  );
};

export default AllPokemon;
