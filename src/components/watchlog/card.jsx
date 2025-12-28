import Image from "next/legacy/image";
import formatDate from "../../utils/format-date";

export default function MovieCard({ movie }) {
  return (
    (<div className="flex flex-col shadow-md rounded-xl border overflow-hidden">
      <div className="border relative w-full h-48 overflow-hidden">
        {movie.image !== null ? (
          <Image
            src={movie.image?.file?.url}
            alt={movie.title}
            unoptimized
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : null}
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
        <p className="text-sm text-gray-600">
          Watched on: {formatDate(movie.date)}
        </p>
      </div>
    </div>)
  );
}
