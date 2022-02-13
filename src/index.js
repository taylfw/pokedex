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

import { Header, SinglePokemon } from "./components";

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

  // const urlData = async () => {
  //   const url = await getAllPokemonUrl();
  //   if (url) {
  //     setUrl(url.results);
  //   } else {
  //     console.log("data didn't come through");
  //   }
  // };

  // const allPokeStufftake1 = async () => {
  //   // console.log("can is see this 1");

  //   // console.log(url, "inside function");
  //   try {
  //     const pokeDetails = url.map((poke) => {
  //       // console.log("can is see this 2");
  //       const pokemon = getEachPokemon(poke.url);
  //       return pokemon;
  //     });

  //     // console.log(pokeDetails, "hey!");
  //     setAllPokemon(pokeDetails);
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // };

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

  console.log(allPokemon);

  useEffect(() => {
    bulby(), bulbySprites(), bulbyDescription(), allPokeStuff();
  }, []);

  const image = sprites.front_default;

  // trying to get a list of all pokemon

  // console.log(url.results, "url data");

  // console.log(allPokemon, "all pokemon");

  return (
    <Router>
      <div id="App">
        <Header />
        <SinglePokemon data={data} image={image} description={description} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
