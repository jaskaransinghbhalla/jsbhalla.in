import BlackButton from "../button-black";
import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

export default function Card({ data }) {
  return (
    <div className=" w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow ease-in-out">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="relative h-48 w-full md:w-64 md:h-full">
            <Image
              src={data.image?.file?.url || "/api/placeholder/400/320"}
              alt={data.title}
              layout="fill"
              unoptimized
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/api/placeholder/400/320"
            />
          </div>
        </div>

        <div className="p-8 flex flex-col justify-between w-full">
          <div>
            <div className="flex justify-between items-center mb-2  w-full">
              <h2 className="font-bold text-2xl text-gray-800 px-2">
                {data.title}
              </h2>
              <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-200 rounded-full">
                {data.status}
              </span>
            </div>
            <p className="text-gray-700 text-base mb-4">{data.description}</p>

            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="mr-4">
                {data.startdate} - {data.enddate}
              </span>
              <Clock className="h-4 w-4 mr-2" />
              <span>Duration: {data.duration}</span>
            </div>
          </div>

          <div className="flex justify-start space-x-4 mt-4">
            <BlackButton href={data.github}>GitHub</BlackButton>
            {data.isdeployed && (
              <BlackButton href={data.deployment}>Live Demo</BlackButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
