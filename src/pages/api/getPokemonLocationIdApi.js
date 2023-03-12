import axios from 'axios';

export default async function GetPokemonLocationIdApi(req, res) {
  const API_BASE_URL = `https://pokeapi.co/api/v2/pokemon/${req.query.id}/encounters`;
  const { data } = await axios.get(API_BASE_URL);
  res.status(200).json(data);
}