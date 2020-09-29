import axios from "axios";
const CATEGORY_DATA = [
  { id: "0", name: "all" },
  { id: "1", name: "drama" },
  { id: "2", name: "action" },
  { id: "3", name: "adventure" },
  { id: "4", name: "fantasy" },
  { id: "5", name: "historical" },
];
const BASE_URL = "http://localhost:3000";
export const getMovies = (query = "all") => {
  return axios
    .get(`${BASE_URL}/api/v1/movies?category=${query}`)
    .then((res) => res.data);
};

export const getCategories = () => {
  return new Promise((res, rej) => {
    setTimeout(res, 1000, CATEGORY_DATA);
  });
};

export const getMovieById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then((res) => res.data);
};

export const createMovie = (movie) => {
  movie.id = Math.random().toString(36).substr(2, 7);
  return axios.post(`${BASE_URL}/api/v1/movies`, movie).then((res) => res.data);
};

export const updateMovie = (movie) => {
  return axios
    .patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
    .then((res) => res.data);
};
export const deleteMovie = (id) => {
  return axios
    .delete(`${BASE_URL}/api/v1/movies/${id}`)
    .then((res) => res.data);
};
