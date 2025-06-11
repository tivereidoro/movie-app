import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/dbConfig.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import movieRoutes from "./routes/movieRoutes.js";

// Initialisations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to Database
connectDB();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());

// API Routes
app.get("/api/health", (req, res) => {
  res
    .status(200)
    .json({ status: "UP", message: "Backend is healthy and running!" });
});

// Use Routers
app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`\n⌗ Server running on http://localhost:${PORT}`);
});
