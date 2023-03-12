import axios from 'axios';

export default async function GetImageByIdApi(req, res) {
  const API_BASE_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${req.query.id}.png`;
  const { data } = await axios.get(API_BASE_URL);
  res.status(200).json(data);
}
