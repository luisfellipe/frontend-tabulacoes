import axios, { AxiosRequestHeaders } from "axios";

export const api = axios.create({
  //baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // baseURL: "https://api.altu.com.br/tabulationV2-dev/",
  baseURL: "https://wphe0t0xrb.execute-api.sa-east-1.amazonaws.com/dev/",
  // baseURL: "https://pokeapi.co/api/v2/pokemon/", // API para teste
  headers: {
    // authenticator: '5D9BDEA8C1C7525821999C3898F93',
    "Access-Control-Allow-Origin": "*"
  } as AxiosRequestHeaders
});
