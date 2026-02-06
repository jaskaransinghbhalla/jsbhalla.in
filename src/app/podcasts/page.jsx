'use client';

import { useState, useEffect } from 'react';
import { getPodcasts } from './actions';
import { LoadingCard } from '@/components/Loading';

export default function PodcastsPage() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPodcasts() {
      try {
        const data = await getPodcasts();
        setPodcasts(data);
      } catch (err) {
        setError('Failed to load podcasts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPodcasts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-900 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Podcasts</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <LoadingCard key={i} lines={3} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-stone-900 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Podcasts</h1>
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Podcasts</h1>
      {podcasts.length === 0 ? (
        <p className="text-gray-400">No podcasts found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {podcast.cover && (
                <img
                  src={podcast.cover}
                  alt={podcast.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    {podcast.title}
                  </h3>
                  {podcast.category && (
                    <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                      {podcast.category}
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {podcast.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{podcast.date}</span>
                  {podcast.duration && <span>{podcast.duration}</span>}
                </div>
                {podcast.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {podcast.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {podcast.link && (
                  <a
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300"
                  >
                    Listen Now
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}