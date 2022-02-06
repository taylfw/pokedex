import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getPokemon, getSpecies, getSprites, getDescription } from "./api";

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

  useEffect(() => {
    bulby(), bulbySprites(), bulbyDescription();
  }, []);

  console.log(sprites.front_default);
  console.log(description);

  const image = sprites.front_default;
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
