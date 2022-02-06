import axios from "axios";

const BASE = "https://pokeapi.co/api/v2/pokemon";
const SPECIES = "https://pokeapi.co/api/v2/pokemon-species";

// REMEMBER THE SLASH!!!

export async function getPokemon() {
  try {
    const { data } = await axios.get(`${BASE}/1`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getSpecies(url) {
  try {
    const { data } = await axios.get(`${url}`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getSprites() {
  try {
    const { data } = await axios.get(`${BASE}/1`);
    return data.sprites;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getDescription() {
  try {
    const { data } = await axios.get(`${SPECIES}/1`);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
