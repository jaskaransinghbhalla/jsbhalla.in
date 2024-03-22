export default function NavBar() {
    return <div>
        <nav className="bg-stone-900 text-white px-44 py-2 sticky top-0 opacity-70">
            <div>
                <div className="flex justify-between">
                    <button>
                        Jaskaran Singh Bhalla
                    </button>
                    <div>
                        <div className="flex justify-end bg-neutral-800">
                            {/* <button className="px-2  align-bottom text-sm">About</button> */}
                            {/* <button className="px-2  align-bottom text-sm">Projects</button> */}
                            {/* <button className="px-2">Projects</button> */}
                            {/* <li>Resume</li> */}
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    </div>
}