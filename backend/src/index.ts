import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

// import dbConnect from './config/db';
// import movieRoutes from './routes/movieRoutes';
// import authRoutes from './routes/authRoutes';

// Initialisations
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// Connect to Database
// dbConnect();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// API Routes
app.get("/api/v1/health", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: "UP", message: "Backend is healthy and running!" });
});

// Use Routers
// app.use("/api/movies", movieRoutes);
// app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`⌗ᆞ  Server running on http://localhost:${PORT}`);
});
