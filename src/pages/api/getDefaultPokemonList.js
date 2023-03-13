import { ApiContant } from './../../contants.js';
import axios from 'axios';

export default async function GetDefaultPokemonList(req, res) {
  const API = `${ApiContant.API_BASE_URL}api/v2/pokemon?limit=1000&offset=0`;
  const { data } = await axios.get(API);
  res.status(200).json(data);
}
