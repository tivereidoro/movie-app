import express from "express";
import {
  getTrendingMovies,
  getSimilarMovies,
  getMovieTrailers,
} from "../services/tmdbService.js";

const router = express.Router();

router.get("/trending", async (req, res) => {
  try {
    const movies = await getTrendingMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id/similar", async (req, res) => {
  try {
    const movies = await getSimilarMovies(req.params.id);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id/trailers", async (req, res) => {
  try {
    const trailers = await getMovieTrailers(req.params.id);
    res.json(trailers);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
