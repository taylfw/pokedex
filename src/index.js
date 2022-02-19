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

import { Header, SinglePokemon, AllPokemon } from "./components";

// GIT TEST

const App = () => {
  const [data, setData] = useState({});
  const [sprites, setSprites] = useState({});
  const [description, setDescription] = useState("");
  // const [url, setUrl] = useState([]);
  const [allPokemon, setAllPokemon] = useState([]);

  const bulby = async () => {
    const bulbaData = await getPokemon();
    bulbaData ? setData(bulbaData) : null;
  };

  const bulbySprites = async () => {
    const bulbaSprites = await getSprites();
    bulbaSprites ? setSprites(bulbaSprites) : null;
  };

  const bulbyDescription = async () => {
    const bulbaDescription = await getDescription();
    bulbaDescription ? setDescription(bulbaDescription) : null;
  };

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
    bulby(), bulbySprites(), bulbyDescription(), allPokeStuff();
  }, []);

  const image = sprites.front_default;

  return (
    <Router>
      <div id="App">
        <Header />
        <Switch>
          <Route path="/single_pokemon">
            <SinglePokemon
              data={data}
              image={image}
              description={description}
            />
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
