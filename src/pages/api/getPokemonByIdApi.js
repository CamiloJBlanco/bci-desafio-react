import axios from 'axios';
import { ApiContant } from './../../contants.js';

export default async function GetPokemonByIdApi(req, res) {
  const API = `${ApiContant.API_BASE_URL}api/v2/pokemon/${req.query.id}`;
  const { data } = await axios.get(API);
  res.status(200).json(data);
}
