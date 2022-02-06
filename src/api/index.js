import axios from "axios";

const BASE = "https://pokeapi.co/api/v2/pokemon";

// REMEMBER THE SLASH!!!

export async function getPokemon() {
  try {
    const { data } = await axios.get(`${BASE}/1`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
