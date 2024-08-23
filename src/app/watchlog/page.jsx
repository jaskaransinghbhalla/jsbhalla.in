"use server"
export const fetchCache = 'force-no-store';
import MovieGrid from "@/components/movie-grid";

export default async function Watchlog() {
  return (
    <div className="h-32 max-h-full md:max-h-screen">
      <div className="flex flex-col h-screen justify-between">
        <div>
          <div className="flex flex-col items-center ">
            <h1 className="text-4xl font-bold my-4 lg:my-0 py-4">Watchlog</h1>
            <div className="flex flex-wrap px-4 lg:mb-4">
              <MovieGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// const content = [
//   {
//     title: "Berlin - Money Heist",
//     genre: "Crime, Drama",
//     director: "Álex Pina",
//     watchDate: "14-, April, 2024",
//     platform: "Netflix",
//   },
//   {
//     title: "Amar Singh Chamkila",
//     genre: "Biopic, Drama, Musical",
//     director: "Imtiaz Ali",
//     watchDate: "13, April 2024",
//     platform: "Netflix",
//   },
//   {
//     title: "Murder Mubarak",
//     genre: "Comedy, Mystery, Horror",
//     director: "Homi Adajania",
//     watchDate: "06-07, April 2024",
//     platform: "Netflix",
//   },
//   {
//     title: "Farzi",
//     genre: "Black comedy, Crime thriller",
//     director: "Raj & DK",
//     watchDate: "03-05, April 2024",
//     platform: "Prime Video",
//   },
// ];

//   <div className="lg : hidden lg:mb-4">
//   {content.map((movie, index) => (
//     <div className="my-4 shadow-md rounded-xl border p-2" key={index}>
//       {/* <div className='p-1'>S.No.:{index + 1}.</div> */}
//       <div className="p-1">
//         {/* <Image src={movie.image?.file?.url} /> */}
//       </div>
//       <div className="p-1">Title : {movie.title}</div>
//       {/* <div className="p-1 ">Genre : {movie.genre}</div> */}
//       {/* <div className="p-1 ">Director : {movie.director}</div> */}
//       <div className="p-1">Watched on : {movie.date}</div>
//     </div>
//   ))}
// </div>}
