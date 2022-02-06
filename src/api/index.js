import axios from "axios";

const BASE = "https://pokeapi.co/api/v2/pokemon";
const SPECIES = "https://pokeapi.co/api/v2/pokemon-species";

const NUMBER = 9;

// REMEMBER THE SLASH!!!

export async function getPokemon() {
  try {
    const { data } = await axios.get(`${BASE}/${NUMBER.toString()}`);
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
    const { data } = await axios.get(`${BASE}/${NUMBER.toString()}`);
    return data.sprites;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getDescription() {
  try {
    const { data } = await axios.get(`${SPECIES}/${NUMBER.toString()}`);
    return data.flavor_text_entries[0].flavor_text;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
