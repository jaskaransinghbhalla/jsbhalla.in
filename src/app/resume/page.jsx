import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
export default function Resume() {
    return <div className="h-32 max-h-full md:max-h-screen">
        <div className="flex flex-col h-screen justify-between">
            <NavBar />
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-10">Resume</h1>
                <div className="flex flex-col items-center mt-10">
                    Page is under construction.
                </div>
            </div>
            <Footer />
        </div>
    </div>

};

