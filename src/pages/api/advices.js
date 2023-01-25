import axios, { Axios } from "axios";

const endPoint = "https://api.adviceslip.com/advice";

export default function handler(req, res) {
  let data;
  axios.get(endPoint).then((response) => {
    data = response.data.slip;
    res.status(200).json(data);
  });
  
}
