"use client";
import { Calendar, Clock, ExternalLink, Github } from "lucide-react";
import Image from "next/legacy/image";
import { useState } from "react";

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
    return {
      badge: "text-green-700 bg-green-50 border-green-200",
    };
  } else if (status.toLowerCase() === "upcoming") {
    return {
      badge: "text-yellow-700 bg-yellow-50 border-yellow-200",
    };
  } else if (status.toLowerCase() === "in progress") {
    return {
      badge: "text-blue-700 bg-blue-50 border-blue-200",
    };
  } else {
    return {
      badge: "text-gray-700 bg-gray-50 border-gray-200",
    };
  }
};

export default function Card({ data }) {
  const statusColors = getStatusColorClass(data.status);
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="group w-full rounded-xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="relative h-48 w-full md:w-64 md:h-full overflow-hidden">
            {data.image && !imageError ? (
              <Image
                src={data.image}
                alt={data.title}
                unoptimized
                layout="fill"
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-4xl mb-2">📁</div>
                  <div className="text-sm">No Image</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <div className="flex justify-between items-start mb-3 gap-4">
              <h2 className="font-bold text-xl text-gray-800 group-hover:text-blue-600 transition-colors flex-1">
                {data.title}
              </h2>
              <span
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border ${statusColors.badge} flex-shrink-0`}
              >
                {data.status}
              </span>
            </div>
            <p className="text-gray-700 text-sm mb-4 line-clamp-3">
              {trimDescription(data.description)}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
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

          <div className="flex justify-start gap-3 mt-4 pt-4 border-t border-gray-100">
            {data.github && (
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {data.isdeployed && data.deployment && (
              <a
                href={data.deployment}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
