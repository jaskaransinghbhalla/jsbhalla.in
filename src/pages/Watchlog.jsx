import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { useEffect } from 'react';
const content = [
    {
        title: "Farzi",
        genre: "Black comedy, Crime thriller",
        director: "Raj & DK",
        watchDate: "03-05, April 2024",
        platform: "Prime Video",
    },
    {
        title: "Murder Mubarak",
        genre: "Comedy, Mystery, Horror",
        director: "Homi Adajania",
        watchDate: "06-07, April 2024",
        platform: "Netflix",
    },

];
useEffect(() => {
    axios.get("")
}, [])
export default function Watchlog() {
    return (
        <div className="h-32 max-h-full md:max-h-screen">
            <div className="flex flex-col h-screen justify-between">
                <NavBar />
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl font-bold mt-10">Watchlog</h1>
                    <div className="flex flex-col items-center mt-10">
                        <table className="border border-gray-300 p-4 m-4">
                            <thead>
                                <tr>
                                    <th className='border p-4'>S.No.</th>
                                    <th className='border p-4'>Title</th>
                                    <th className='border p-4'>Genre</th>
                                    <th className='border p-4'>Director</th>
                                    <th className='border p-4'>Watched</th>
                                    <th className='border p-4'>Platform</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content.map((movie, index) => (
                                    <tr key={index}>
                                        <td className='border p-4'>{index + 1}.</td>
                                        <td className='border p-4'>{movie.title}</td>
                                        <td className='border p-4'>{movie.genre}</td>
                                        <td className='border p-4'>{movie.director}</td>
                                        <td className='border p-4'>{movie.watchDate}</td>
                                        <td className='border p-4'>{movie.platform}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};
