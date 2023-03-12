import axios from 'axios';

export default async function GetPokemonByIdApi(req, res) {
  const API_BASE_URL = `https://pokeapi.co/api/v2/pokemon/${req.query.id}`;
  const { data } = await axios.get(API_BASE_URL);
  res.status(200).json(data);
}
