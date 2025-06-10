import axios from "axios";

const tmdbApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.TMDB_API_KEY,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await tmdbApi.get("/trending/movie/week");
  return data.results;
};

export const getSimilarMovies = async (movieId) => {
  const { data } = await tmdbApi.get(`/movie/${movieId}/similar`);
  return data.results;
};

export const getMovieTrailers = async (movieId) => {
  const { data } = await tmdbApi.get(`/movie/${movieId}/videos`);
  // Filter for official YouTube trailers
  return data.results.filter(
    (v) => v.site === "YouTube" && v.type === "Trailer"
  );
};
