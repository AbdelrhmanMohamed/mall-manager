import axios from "axios";

export const POS_API = axios.create({
  baseURL: "https://frontapi.itdeg.net/api/FrontEnd/",
  timeout: 2000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});
