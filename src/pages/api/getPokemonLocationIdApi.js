import axios from 'axios';
import { ApiContant } from '@/contants.js';

export default async function GetPokemonLocationIdApi(req, res) {
  const API = `${ApiContant.API_BASE_URL}api/v2/pokemon/${req.query.id}/encounters`;
  const { data } = await axios.get(API);
  res.status(200).json(data);
}