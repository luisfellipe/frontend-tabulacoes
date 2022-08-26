import axios from "axios";

export const api = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  baseURL: "https://wphe0t0xrb.execute-api.sa-east-1.amazonaws.com/dev/"
  // baseURL: "https://pokeapi.co/api/v2/pokemon/", // API para teste
});
