import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-500 ${sizeClasses[size]} ${className}`}
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

interface LoadingCardProps {
  title?: string;
  lines?: number;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({
  title,
  lines = 3,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      {title && (
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
      )}
      <div className="space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-200 rounded animate-pulse"
            style={{
              width: `${Math.random() * 40 + 60}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};