import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import axios from 'axios';

export default function Watchlog() {


    return (
        <div className="h-32 max-h-full md:max-h-screen">
            <div className="flex flex-col h-screen justify-between">
                <NavBar />
                <Body />
                <Footer />
            </div>
        </div>
    );
};

function Body() {
    const content = [
        {
            title: "Berlin - Money Heist",
            genre: "Crime, Drama",
            director: "Álex Pina",
            watchDate: "14-, April, 2024",
            platform: "Netflix"
        },
        {
            title: "Amar Singh Chamkila",
            genre: "Biopic, Drama, Musical",
            director: "Imtiaz Ali",
            watchDate: "13, April 2024",
            platform: "Netflix",
        },
        {
            title: "Murder Mubarak",
            genre: "Comedy, Mystery, Horror",
            director: "Homi Adajania",
            watchDate: "06-07, April 2024",
            platform: "Netflix",
        },
        {
            title: "Farzi",
            genre: "Black comedy, Crime thriller",
            director: "Raj & DK",
            watchDate: "03-05, April 2024",
            platform: "Prime Video",
        },




    ];
    return <div>
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mt-10">Watchlog</h1>
            <table className="hidden lg:block border border-gray-300 text-sm lg:text-base mx-3 my-2 text-center mt-10">
                <thead>
                    <tr>
                        <th className='border p-4'>S.No.</th>
                        <th className='border p-4 '>Title</th>
                        <th className='border p-4 '>Genre</th>
                        <th className='border p-4 '>Director</th>
                        <th className='border p-4'>Watched</th>
                    </tr>
                </thead>
                <tbody>
                    {content.map((movie, index) => (
                        <tr key={index}>
                            <td className='border p-4'>{index + 1}.</td>
                            <td className='border p-4'>{movie.title}</td>
                            <td className='border p-4 '>{movie.genre}</td>
                            <td className='border p-4 '>{movie.director}</td>
                            <td className='border p-4'>{movie.watchDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="lg:hidden mb-4">
                {content.map((movie, index) => (
                    <div className='my-4 shadow-md rounded-xl border p-2' key={index}>
                        {/* <div className='p-1'>S.No.:{index + 1}.</div> */}
                        <div className='p-1'>Title : {movie.title}</div>
                        <div className='p-1 '>Genre : {movie.genre}</div>
                        <div className='p-1 '>Director : {movie.director}</div>
                        <div className='p-1'>Watched on : {movie.watchDate}</div>
                    </div>
                ))}
            </div>

        </div>
    </div>
}