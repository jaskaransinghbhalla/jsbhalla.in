import { Calendar, Clock } from "lucide-react";
import BlackButton from "../buttons/ButtonStyleTwo";
import Image from "next/legacy/image";

const DESCRIPTION_LENGTH = 20;

const trimDescription = (description) => {
  const words = description.split(" ");
  if (words.length > DESCRIPTION_LENGTH) {
    return words.slice(0, DESCRIPTION_LENGTH).join(" ") + "...";
  }
  return description;
};

const getStatusColorClass = (status) => {
  if (status.toLowerCase() === "complete" || status.toLowerCase() === "done") {
    return "text-green-800 bg-green-200";
  } else if (status.toLowerCase() === "upcoming") {
    return "text-yellow-800 bg-yellow-200";
  } else if (status.toLowerCase() === "in progress") {
    return "text-blue-800 bg-blue-200";
  } else {
    return "text-gray-800 bg-gray-200";
  }
};

export default function Card({ data }) {
  const statusColorClass = getStatusColorClass(data.status);
  return (
    <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow ease-in-out">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="relative h-40 w-full md:w-64 md:h-full">
            <Image
              src={data.image?.file?.url}
              alt={data.title}
              unoptimized
              layout="fill"
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div className="p-8 flex flex-col justify-between w-full">
          <div>
            <div className="flex justify-between items-center mb-2 w-full">
              <h2 className="font-bold text-2xl text-gray-800 px-2">
                {data.title}
              </h2>
              <span
                className={`px-3 py-1 text-sm font-semibold ${statusColorClass} rounded-full`}
              >
                {data.status}
              </span>
            </div>
            <p className="text-gray-700 text-base mb-4 text-justify">
              {trimDescription(data.description)}
            </p>

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
