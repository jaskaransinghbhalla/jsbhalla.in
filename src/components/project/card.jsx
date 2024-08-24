import ButtonBlack from "../button-black";
import Image from "next/image";
export default function Card({ data }) {
  
  return (
    <div className="flex flex-col my-4 lg:mx-8 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 lg:w-108">


      <div className="h-32lg:h-40 m-2 lg:h-56 overflow-hidden text-white bg-clip rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <Image
          className="px-2 lg:px-4 h-56"
          // src={data.img}
          alt="card-image"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      <div className="px-6 pb-4">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {data.title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {data.description}
        </p>
      </div>

      {/* Button */}
      <div className="p-6 lg:p-6 pt-0 flex justify-between">
        <ButtonBlack href={data.github}>Github</ButtonBlack>
        {data.isdeployed ? (
          <ButtonBlack href={data.deployment}>Deployment</ButtonBlack>
        ) : null}
      </div>
    </div>
  );
}
