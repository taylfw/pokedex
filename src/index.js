import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  getPokemon,
  getSpecies,
  getSprites,
  getDescription,
  getAllPokemonUrl,
  getEachPokemon,
} from "./api";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Home, Header, SinglePokemon, AllPokemon } from "./components";

const App = () => {
  const [allPokemon, setAllPokemon] = useState([]);

  const allPokeStuff = async () => {
    const url = await getAllPokemonUrl();
    const dataResults = url.results;

    const pokeArray = await Promise.all(
      dataResults.map(async (eachUrl) => {
        const urlData = eachUrl.url;
        const pokemon = getEachPokemon(urlData);
        return pokemon;
      })
    );
    setAllPokemon(pokeArray);
  };

  // console.log(allPokemon);

  useEffect(() => {
    allPokeStuff();
  }, []);

  return (
    <Router>
      <div id="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/single_pokemon/:id">
            <SinglePokemon allPokemon={allPokemon} />
          </Route>
          <Route path="/poke_list">
            <AllPokemon allPokemon={allPokemon} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
