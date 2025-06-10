import MovieCard from "@/components/MovieCard";
import { Movie } from "@/types/movie"; // We will create this type file

async function getMovies(): Promise<Movie[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/movies/trending`,
      {
        next: { revalidate: 3600 }, // ISR: Revalidate every hour
      }
    );
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    return [];
  }
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Trending Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
