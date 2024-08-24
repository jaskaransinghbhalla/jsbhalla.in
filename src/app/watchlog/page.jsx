import MovieGrid from "@/components/watchlog/grid";
export default function Watchlog() {
  return (
    <div className="h-32 max-h-full md:max-h-screen">
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col items-center ">
          <h1 className="text-4xl font-bold my-4 lg:my-0 py-4">Watchlog</h1>
          <div className="flex flex-wrap px-4 lg:mb-4">
            <MovieGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
