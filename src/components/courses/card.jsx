import Progress from "./progress";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Card({ data }) {
  const getStatusColorClass = (status) => {
    if (
      status.toLowerCase() === "complete" ||
      status.toLowerCase() === "done"
    ) {
      return {
        badge: "text-green-700 bg-green-50 border-green-200",
        progress: "bg-green-500",
      };
    } else if (status.toLowerCase() === "upcoming") {
      return {
        badge: "text-yellow-700 bg-yellow-50 border-yellow-200",
        progress: "bg-yellow-500",
      };
    } else if (status.toLowerCase() === "in progress") {
      return {
        badge: "text-blue-700 bg-blue-50 border-blue-200",
        progress: "bg-blue-500",
      };
    } else {
      return {
        badge: "text-gray-700 bg-gray-50 border-gray-200",
        progress: "bg-gray-500",
      };
    }
  };
  
  const statusColors = getStatusColorClass(data.status);
  
  return (
    <div className="group w-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4 gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 mb-2">
              <h2 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                {data.reference ? (
                  <Link 
                    href={data.reference} 
                    className="flex items-center gap-2 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.name}
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                  </Link>
                ) : (
                  data.name
                )}
              </h2>
            </div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              {data.code}
            </p>
          </div>

          <div className={`flex-shrink-0 px-4 py-2 rounded-lg border ${statusColors.badge} min-w-[120px]`}>
            <div className="text-xs font-semibold mb-2 text-center">
              {data.status}
            </div>
            <Progress progress={data.progress} colorClass={statusColors.progress} />
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-blue-50 transition-colors">
                <Calendar className="h-4 w-4 text-gray-600" />
              </div>
              <span className="font-medium">
                {data.startdate} - {data.enddate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-blue-50 transition-colors">
                <Clock className="h-4 w-4 text-gray-600" />
              </div>
              <span className="font-medium">{data.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
