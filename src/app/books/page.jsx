'use client';

import { useState, useEffect } from 'react';
import { getBooks } from './actions';
import { LoadingCard } from '@/components/Loading';

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (err) {
        setError('Failed to load books');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, []);

  const renderStars = (rating) => {
    const ratingNum = parseInt(rating) || 0;
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= ratingNum ? 'text-yellow-400' : 'text-gray-600'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-stone-900 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Books</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <LoadingCard key={i} lines={4} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-stone-900 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Books</h1>
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Books</h1>
      {books.length === 0 ? (
        <p className="text-gray-400">No books found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex">
                {book.cover && (
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-24 h-36 object-cover object-center"
                  />
                )}
                <div className="flex-1 p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-white line-clamp-2">
                      {book.title}
                    </h3>
                    {book.rating && renderStars(book.rating)}
                  </div>
                  <p className="text-gray-400 text-sm mb-2">by {book.author}</p>
                  {book.pages && (
                    <p className="text-gray-500 text-xs mb-2">{book.pages} pages</p>
                  )}
                  {book.dateFinished && (
                    <p className="text-gray-500 text-xs mb-2">
                      Finished: {book.dateFinished}
                    </p>
                  )}
                  {book.genre.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {book.genre.slice(0, 2).map((g, index) => (
                        <span
                          key={index}
                          className="text-xs bg-purple-600 text-white px-2 py-1 rounded"
                        >
                          {g}
                        </span>
                      ))}
                      {book.genre.length > 2 && (
                        <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded">
                          +{book.genre.length - 2} more
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex gap-2 mt-2">
                    {book.amazonLink && (
                      <a
                        href={book.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-orange-400 hover:text-orange-300"
                      >
                        Amazon
                      </a>
                    )}
                    {book.goodreadsLink && (
                      <a
                        href={book.goodreadsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-yellow-400 hover:text-yellow-300"
                      >
                        Goodreads
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {book.description && (
                <div className="px-4 pb-4">
                  <p className="text-gray-300 text-sm line-clamp-3">
                    {book.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}