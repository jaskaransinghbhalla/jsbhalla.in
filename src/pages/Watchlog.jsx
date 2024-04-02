import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const content = [
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "The Matrix",
        genre: "Science Fiction",
        duration: 136,
        watched: true,
        director: "Lana Wachowski",
        watchDate: "01 Sep 2021"
    },
    {
        title: "Inception",
        genre: "Science Fiction",
        duration: 148,
        watched: false,
        director: "Christopher Nolan",
        watchDate: "02 Sep 2021"

    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: 142,
        watched: true,
        director: "Frank Darabont",
        watchDate: "03 Sep 2021"
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: 142,
        watched: true,
        director: "Frank Darabont",
        watchDate: "03 Sep 2021"
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: 142,
        watched: true,
        director: "Frank Darabont",
        watchDate: "03 Sep 2021"
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        duration: 142,
        watched: true,
        director: "Frank Darabont",
        watchDate: "03 Sep 2021"
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        watched: true,
        director: "Frank Darabont",
        watchDate: "03 Sep 2021"
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        watched: true,
        director: "Frank Darabont",
        watchDate: "03 Sep 2021"
    },
    {
        title: "The Shawshank Redemption",
        genre: "Drama",
        watched: true,
        director: "Frank Darabont",
        watchDate: "03 Sep 2021"
    },

];
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
                                    <th className='border p-4'>Watch Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {content.map((movie, index) => (
                                    <tr key={index}>
                                        <td className='border p-4'>{index}.</td>
                                        <td className='border p-4'>{movie.title}</td>
                                        <td className='border p-4'>{movie.genre}</td>
                                        <td className='border p-4'>{movie.director}</td>
                                        <td className='border p-4'>{movie.watchDate}</td>
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
