import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="sticky top-0 backdrop-blur-sm">
            <nav className="bg-stone-900 text-white px-4 lg:px-44 py-2 lg:py-4 sticky top-0 opacity-70">
                <div className="flex justify-between items-center">
                    <div>
                        <button className="text-lg" onClick={() => navigate('/')}>
                            Jaskaran Singh Bhalla
                        </button>
                    </div>
                    <div className="flex">
                        {/* <NavButton route="about" text="About" /> */}
                        <NavButton route="projects" text="Projects" />
                        <NavButton route="watchlog" text="Watchlog" />
                        {/* <NavButton route="blog" text="Blog" /> */}
                        {/* <NavButton route="resume" text="Resume" /> */}
                    </div>
                </div>
            </nav >
        </div >
    );
}

function NavButton({ route, text }) {
    const navigate = useNavigate();
    return (
        <button className="mx-2" onClick={() => navigate('/' + route)}>
            {text}
        </button>
    );
}