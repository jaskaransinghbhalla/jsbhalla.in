export default function About() {
    return <div className="py-4">
        <div className="grid grid-cols-4" >
            <div className="col-span-2">
                <h1 className=" font-extrabold">
                    Hello there, I'm Jaskaran!
                </h1>
                <div className="text-xs text-start">
                    <p className="py-3">
                        I am an undergrad at <a className="underline font-semibold">Indian Institute of Technology,Delhi</a> pursuing my Bachelors's of Technology in Textile Engineering.
                    </p>
                    <p className="py-3">
                        I am also doing two Minor Degrees in <span className="font-semibold">Computer Science and Entrepreneurship.</span>
                    </p>
                    <p>
                        My additional interests include Psychology, Finance, Blockchain, and AI/ML.
                    </p>
                    <p className="py-3 italic">
                        "In the realm of tech and business,
                        I'm a blend of Technology & Entrepreneurship, weaving innovation into opportunity with every step"
                    </p>
                    {/* Welcome to my little space on the internet where I document my journey of learning new technologies and finding my place in the tech world. When I'm not coding, I listen to music. */}
                </div>
            </div>
            <div className="col-span-2 grid justify-items-center">
                <img className="rounded-full h-70 w-60 border-stone-700 border-4" src="photo.jpg"></img>
            </div>
        </div>

    </div>
}