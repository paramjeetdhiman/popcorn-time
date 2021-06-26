import axios from "axios";

/// creating instance so we dont have to write again same in front of every ROW...
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
