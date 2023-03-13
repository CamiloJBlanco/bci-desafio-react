import { ApiContant } from './../../contants.js';
import axios from 'axios';

export default async function GetCharacteristicsById(req, res) {
  const API = `${ApiContant.API_BASE_URL}api/v2/characteristic/${req.query.id}`;
  const { data } = await axios.get(API);
  res.status(200).json(data);
}
