import MovieGrid from "../../components/watchlog/grid";

export const revalidate = 7200; // Revalidate every 2 hours

export default async function Watchlog() {
  return (
    <div className="flex flex-col items-center mb-16 min-h-screen">
      <div className="w-full max-w-7xl px-4 lg:px-8 mt-8 mb-12">
        <div className="mb-2">
          <h2 className="text-5xl font-bold text-gray-800 mb-3">
            Watchlog
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        <p className="text-gray-600 text-lg mt-4">
          Movies and shows I&apos;ve watched
        </p>
      </div>

      <div className="w-full max-w-7xl px-4 lg:px-8">
        <MovieGrid />
      </div>
    </div>
  );
}
