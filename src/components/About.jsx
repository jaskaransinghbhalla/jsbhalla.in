export default function About() {
    return <div className="py-4">
        <div className="grid grid-cols-8" >
            <div className="col-span-5  mr-8">
                <h1 className="font-extrabold">
                    Hello there, I'm Jaskaran Singh Bhalla!
                </h1>
                <div className="text text-justify">
                    <p className="py-2">
                        I am a senior undergrad at <a className="underline font-semibold">Indian Institute of Technology,Delhi</a> pursuing my Bachelors's of Technology in Textile Engineering.
                    </p>
                    <p>
                        I am also doing Minor Degrees in <span className="font-semibold">Computer Science and Entrepreneurship.</span>
                    </p>
                    <p className="py-2">
                        My additional interests include Finance, Blockchain, AI/ML and Psychology.
                    </p>
                    <p className="py-2">
                    I enjoy listening to Punjabi Music and having deep conversations with people. Other than that I like listening to podcasts and exploring new topics.
                    </p>
                </div>
            </div>
            <div className="col-span-3 grid justify-items-center">
                <img className="rounded-full h-70 w-60 border-stone-700 border-4" src="photo.jpg"></img>
            </div>
        </div>
        <blockquote className="p-4 mt-16 border-stone-500 bg-stone-600">
            <p className="text italic leading-relaxed text-white text-justify">
                "In the realm of Computer Science and Business,
                I'm a blend of Technology & Entrepreneurship, weaving innovation into opportunity with every step."</p>
        </blockquote>
    </div>
}