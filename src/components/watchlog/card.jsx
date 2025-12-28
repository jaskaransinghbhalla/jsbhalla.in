"use client";
import Image from "next/legacy/image";
import formatDate from "../../utils/format-date";
import { Calendar } from "lucide-react";
import { useState } from "react";

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="relative w-full h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {movie.image && !imageError ? (
          <Image
            src={movie.image}
            alt={movie.title}
            unoptimized
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            onError={() => setImageError(true)}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-2">🎬</div>
              <div className="text-sm">No Image</div>
            </div>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-3 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
          {movie.title}
        </h3>
        <div className="mt-auto flex items-center gap-2 text-sm text-gray-600">
          <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-blue-50 transition-colors">
            <Calendar className="h-4 w-4 text-gray-600" />
          </div>
          <span className="font-medium">
            {formatDate(movie.date)}
          </span>
        </div>
      </div>
    </div>
  );
}
