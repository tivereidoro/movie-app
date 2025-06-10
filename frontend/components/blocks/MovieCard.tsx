import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.png";

  return (
    <Link href={`/movie/${movie.id}`} className="group">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <Image
          src={imageUrl}
          alt={movie.title}
          width={500}
          height={750}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mt-2 text-sm font-semibold truncate">{movie.title}</h3>
    </Link>
  );
}
