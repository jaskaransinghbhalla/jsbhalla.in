"use client";
import BlackButton from "../buttons/ButtonStyleTwo";
import Image from "next/legacy/image";
import { Calendar, Clock, User, Wrench, MapPin, Briefcase } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Card({ data }) {
  const getStatusColorClass = (status) => {
    if (
      status.toLowerCase() === "complete" ||
      status.toLowerCase() === "done"
    ) {
      return "text-green-800 bg-green-200";
    } else if (status.toLowerCase() === "upcoming") {
      return "text-yellow-800 bg-yellow-200";
    } else if (status.toLowerCase() === "in progress") {
      return "text-blue-800 bg-blue-200";
    } else {
      return "text-gray-800 bg-gray-200";
    }
  };

  const [statusColorClass, setStatusColorClass] = useState(
    getStatusColorClass(data.status)
  );

  useEffect(() => {
    setStatusColorClass(getStatusColorClass(data.status));
  }, [data.status]);
  return (
    <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow ease-in-out m-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <div className="relative h-48 w-full md:w-80 md:h-full rounded p-2">
            <Image
              src={data.image?.file?.url}
              alt={data.title}
              layout="fill"
              objectFit="contain"
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
                className={`p-2 text-sm font-semibold rounded-full ${statusColorClass}`}
              >
                {data.status}
              </span>
            </div>

            <p className="hidden md:inline-flex text-gray-700 text-base mb-3">
              {data.description}
            </p>
            <div className="flex text-sm md:text-md items-center mb-2">
              <User className="h-4 w-4 mr-2 text-gray-600" />
              <span className="text-gray-700">Role: {data.role}</span>
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
              <div className="flex items-center mr-4 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span>
                  {data.location} ({data.workType})
                </span>
              </div>
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2" />
                <span>{data.employmentType}</span>
              </div>
            </div>
          </div>

          <div className="flex items-start">
            <Wrench className="h-4 w-4 mr-2 mt-1 text-gray-600 md:mb-4" />
            <div className="flex">
              <span className="text-gray-700 mr-2">{"Tools:"}</span>
              <div className="flex flex-wrap gap-2">
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

          <div className="flex justify-start space-x-4 mt-2 md:mt-4">
            <BlackButton href={data.github}>Website</BlackButton>
          </div>
        </div>
      </div>
    </div>
  );
}
