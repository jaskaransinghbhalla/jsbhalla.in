import Image from "next/image";

const MovieGrid = ({ content }) => {
  return (
    <div className="px-4 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {content.map((movie, index) => (
          <div
            className="flex flex-col shadow-md rounded-xl border overflow-hidden"
            key={index}
          >
            <div className="relative w-full h-48">
              {movie.image !== null ? (
                <Image
                  src={movie.image?.file?.url}
                  alt={movie.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              ) : null}
            </div>
            <div className="p-4 flex-grow">
              <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
              <p className="text-sm text-gray-600">Watched on: {movie.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
