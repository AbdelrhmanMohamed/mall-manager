import axios from "axios";

export const POS_API = axios.create({
  baseURL: "https://frontapi.itdeg.net/api/FrontEnd/",
  timeout: 2000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: "",
    "Accept-Encoding": "gzip, deflate, br",
    Connection: "keep-alive",
    "Content-Length": "<calculated when request is sent>",
    Host: "<calculated when request is sent>",
    Method: "POST",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": true,
    credentials: "include",
    Referer: "https://frontapi.itdeg.net/api/",
  },
  withCredentials: true,
});
