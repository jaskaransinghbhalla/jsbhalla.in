import BlackButton from "../button-black";
import Image from "next/image";
import { Calendar, Clock, User, Wrench } from "lucide-react";
import Link from "next/link";
const getStatusColorClass = (status) => {
  switch (status.toLowerCase()) {
    case "complete":
      return "text-green-800 bg-green-200";
    case "upcoming":
      return "text-yellow-800 bg-yellow-200";
    case "in progress":
      return "text-blue-800 bg-blue-200";
    default:
      return "text-gray-800 bg-gray-200";
  }
};
export default function Card({ data }) {
  const statusColorClass = getStatusColorClass(data.status);
  return (
    <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow ease-in-out">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="relative h-48 w-full md:w-80 md:h-full">
            <Image
              src={data.image?.file?.url || "/api/placeholder/400/320"}
              alt={data.title}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/api/placeholder/400/320"
              unoptimized
            />
          </div>
        </div>

        <div className="p-8 flex flex-col justify-between w-full">
          <div>
            <div className="flex justify-between items-center mb-2  w-full">
              <h2 className="font-bold text-2xl text-gray-800 px-2 hover:underline">
                <Link href={data.reference}>{data.organization}</Link>
              </h2>
              <span
                className={`px-3 py-1 text-sm font-semibold ${statusColorClass} rounded-full`}
              >
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
              <span>
                Duration: {calculateDuration(data.startdate, data.enddate)}
              </span>
            </div>
          </div>
          <div className="flex items-center mb-2">
            <User className="h-4 w-4 mr-2 text-gray-600" />
            <span className="text-gray-700">Role: {data.role}</span>
          </div>

          <div className="flex items-start mb-4">
            <Wrench className="h-4 w-4 mr-2 mt-1 text-gray-600" />
            <div>
              <span className="text-gray-700">Tools:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {data.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-start space-x-4 mt-4">
            <BlackButton href={data.github}>GitHub</BlackButton>
          </div>
        </div>
      </div>
    </div>
  );
}

function calculateDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const differenceInTime = end.getTime() - start.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  if (differenceInDays < 30) {
    return `${differenceInDays} days`;
  } else {
    const months = Math.floor(differenceInDays / 30);
    return `${months} month${months > 1 ? "s" : ""}`;
  }
}
