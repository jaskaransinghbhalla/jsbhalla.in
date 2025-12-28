import { getWatchlogs } from "../../app/watchlog/actions";
import MovieCard from "./card";

export default async function MovieGrid() {
  const content = await getWatchlogs();
  return (
    <>
      {content && content.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {content.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No watchlogs available.</p>
        </div>
      )}
    </>
  );
}
