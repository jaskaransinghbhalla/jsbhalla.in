import BlackButton from "../button-black";
import Progress from "./progress";
import { Calendar, Clock, User, Wrench, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
const getStatusColorClass = (status) => {
  switch (status.toLowerCase()) {
    case "done":
      return "text-green-800";
    case "not started":
      return "text-yellow-800";
    case "in progress":
      return "text-blue-800";
    default:
      return "text-gray-800";
  }
};
export default function Card({ data }) {
  const statusColorClass = getStatusColorClass(data.status);
  return (
    <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow ease-in-out">
      <div className="md:flex">
        <div className="md:flex-shrink-0"></div>
        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col">
                <h2 className="font-bold text-lg text-gray-800 hover:underline">
                  <Link href={data.reference}>{data.name}</Link>
                </h2>
                <p className="hidden md:inline-flex text-gray-700 text-base mb-3">
                  {data.code}
                </p>
              </div>

              <span
                className={`px-3 w-1/4 text-sm font-semibold ${statusColorClass} rounded-full`}
              >
                <div className="">{data.status}</div>
                <div className="pt-1">
                  <Progress progress={data.progress} />
                </div>
              </span>
            </div>

            <div className="flex flex-wrap items-center text-sm text-gray-600 mb-2">
              <div className="flex items-center mr-4 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  {data.startdate} - {data.enddate}
                </span>
              </div>
              <div className="flex items-center mr-4 mb-2">
                <Clock className="h-4 w-4 mr-2" />
                <span>
                  <span>Duration: {data.duration}</span>
                </span>
              </div>
            </div>
          </div>

          {/* <div className="w-full">
            <div>
              <span className="text-gray-700 font-semibold mb-1">Topics:</span>{" "}
              &nbsp;{data.topics}
            </div>{" "}
          </div> */}

          {/* <div className="flex justify-start space-x-4 mt-1">
            <BlackButton href={data.notes}>Notes</BlackButton>
          </div> */}
        </div>
      </div>
    </div>
  );
}
