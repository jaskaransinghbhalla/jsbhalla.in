import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
export default function Blog() {
    return <div className="h-32 max-h-full md:max-h-screen">
        <div className="flex flex-col h-screen justify-between">
            <NavBar />
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-10">Blog</h1>
                <div className="flex flex-col items-center mt-10">
                    Page is under construction.
                </div>
            </div>
            <Footer />
        </div>
    </div>

};

