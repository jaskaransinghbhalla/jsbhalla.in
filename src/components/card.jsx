// import ButtonBlack from "../button-black";
import Image from "next/image";
export default function Card({ data }) {
  return (
    <div className="flex flex-col my-4 lg:mx-8 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 lg:w-80">
      <div className="flex flex-col shadow-md rounded-xl border overflow-hidden">
        <div className="relative w-full h-48">
          {data.image !== null ? (
            <Image
              src={data.image?.file?.url}
              alt={data.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          ) : null}
        </div>
        <div className="p-4 flex-grow">
          <h3 className="font-semibold text-lg mb-2">{data.title}</h3>
          <p className="text-sm text-gray-600">Watched on: {data.date}</p>
        </div>
      </div>
    </div>
  );
}
