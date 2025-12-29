"use client";
import BlackButton from "../buttons/ButtonStyleTwo";
import Image from "next/legacy/image";
import { Calendar, Clock, User, Wrench, MapPin, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Card({ data }) {
  const getAbsoluteUrl = (url) => {
    if (!url) return "";
    // If URL already has a protocol, return as is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    // Otherwise, prepend https://
    return `https://${url}`;
  };

  const getStatusColorClass = (status) => {
    if (!status) return null;
    if (
      status.toLowerCase() === "complete" ||
      status.toLowerCase() === "done"
    ) {
      return "text-green-700 bg-green-50 border-green-200";
    } else if (status.toLowerCase() === "upcoming") {
      return "text-yellow-700 bg-yellow-50 border-yellow-200";
    } else if (status.toLowerCase() === "in progress") {
      return "text-blue-700 bg-blue-50 border-blue-200";
    } else {
      return "text-gray-700 bg-gray-50 border-gray-200";
    }
  };

  const [statusColorClass, setStatusColorClass] = useState(
    getStatusColorClass(data.status)
  );
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setStatusColorClass(getStatusColorClass(data.status));
  }, [data.status]);
  
  return (
    <div className="group w-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="relative h-48 w-full md:w-80 md:h-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            {data.image && !imageError ? (
              <Image
                src={data.image}
                alt={data.organization || data.title}
                layout="fill"
                objectFit="contain"
                unoptimized
                onError={() => setImageError(true)}
                className="p-4"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-4xl mb-2">💼</div>
                  <div className="text-sm">No Image</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <div className="flex justify-between items-start mb-3 gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                  {data.organization}
                  {data.reference && (
                    <a
                      href={getAbsoluteUrl(data.reference)}
                      className="flex items-center"
                      aria-label={`Visit ${data.organization}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 text-gray-400 hover:text-blue-600 transition-colors flex-shrink-0" />
                    </a>
                  )}
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <User className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-700 font-medium">{data.role}</span>
                </div>
              </div>
              {statusColorClass && (
                <span
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${statusColorClass} flex-shrink-0`}
                >
                  {data.status}
                </span>
              )}
            </div>

            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
              {data.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-blue-50 transition-colors">
                  <Calendar className="h-4 w-4 text-gray-600" />
                </div>
                <span className="font-medium">
                  {data.startdate} - {data?.enddate || "Present"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-blue-50 transition-colors">
                  <Clock className="h-4 w-4 text-gray-600" />
                </div>
                <span className="font-medium">
                  {typeof data.durationInMonths === "number" &&
                  data.durationInMonths > 0
                    ? `${data.durationInMonths} month${
                        data.durationInMonths !== 1 ? "s" : ""
                      }`
                    : data.duration}
                </span>
              </div>
              {data.location && (
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-blue-50 transition-colors">
                    <MapPin className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="font-medium">
                    {data.location} {data.workType && `(${data.workType})`}
                  </span>
                </div>
              )}
              {data.employmentType && (
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-blue-50 transition-colors">
                    <Briefcase className="h-4 w-4 text-gray-600" />
                  </div>
                  <span className="font-medium">{data.employmentType}</span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-start gap-2">
              <Wrench className="h-4 w-4 mt-1 text-gray-500 flex-shrink-0" />
              <div className="flex-1">
                <span className="text-gray-700 text-sm font-medium mr-2">Tools:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {data.tools && data.tools.length > 0 ? (
                    data.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        {tool}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-400 text-sm">No tools listed</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
