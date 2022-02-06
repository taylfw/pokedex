import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getPokemon } from "./api";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Header, SinglePokemon } from "./components";

const App = () => {
  const [data, setData] = useState([]);

  const bulby = async () => {
    const bulbaData = await getPokemon();
    bulbaData ? setData(bulbaData) : null;
  };

  useEffect(() => {
    bulby();
  }, []);

  return (
    <Router>
      <div id="App">
        <Header />
        <SinglePokemon data={data} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
