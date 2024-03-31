export default function NavBar() {
    return <div>
        <nav className="bg-stone-900 text-white px-44 py-4 sticky top-0 opacity-70">
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <button className="text-lg">
                            <a href="https://jaskaransinghbhalla.in">
                                Jaskaran Singh Bhalla
                            </a>
                        </button>
                    </div>
                    <div>
                        <div className="flex">
                            {/* <button className="mx-2 ">
                                <a href="/about">
                                    About
                                </a>
                            </button>
                            <button className="mx-2 ">
                                <a href="/projects">
                                    Projects
                                </a>
                            </button> */}
                            {/* <li>Resume</li> */}
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    </div>
}