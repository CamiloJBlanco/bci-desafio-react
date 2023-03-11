import axios from 'axios';

export default async function GetDefaultPokemonList(req, res) {
  const API_BASE_URL = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;
  const { data } = await axios.get(API_BASE_URL);
  res.status(200).json(data);
}
