import { Link } from "react-router-dom";
export default function Card({ data }) {
    return (
        <div className="flex flex-col my-4 lg:mx-8 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 lg:w-80">
            <div className="h-32lg:h-40 m-2 lg:h-56 overflow-hidden text-white bg-clip rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <img className="px-2 lg:px-4 h-56" src={data.img} alt="card-image" />
            </div>
            <div className="px-6 pb-4">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {data.title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {data.description}
                </p>
            </div>
            <div className="p-6 lg:p-6 pt-0 flex justify-between">
                <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-3 lg:py-3 lg:px-6 rounded-lg bg-stone-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    <Link to={data.github}>
                        Github
                    </Link>
                </button>
                {data.isdeployed ? <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs  py-2 px-3 lg:py-3 lg:px-6 rounded-lg bg-stone-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    <Link to={data.deployment}>
                        Deployment
                    </Link>
                </button> : <div></div>}

            </div>
        </div>);
}