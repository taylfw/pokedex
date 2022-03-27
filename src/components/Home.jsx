import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getSpecies } from "../api";

const Home = ({ data, image, description }) => {

  return (
    <div>
      <h1>Welcome, to the world of Pokemon</h1>
    </div>
  );
};

export default Home;
