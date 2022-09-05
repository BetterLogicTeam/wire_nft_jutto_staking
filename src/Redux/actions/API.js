import axios from "axios";

export const API = axios.create({
  baseURL: "https://ulematic-api.herokuapp.com/"
});
