import React from 'react';
import { Neighborhood, Preferences } from '../types';
import NeighborhoodCard from './NeighborhoodCard';
import { TrendingUp } from 'lucide-react';

interface ResultsPageProps {
  neighborhoods: Neighborhood[];
  preferences: Preferences;
  onNeighborhoodSelect: (neighborhood: Neighborhood) => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ 
  neighborhoods, 
  preferences, 
  onNeighborhoodSelect 
}) => {
  const topMatch = neighborhoods[0];
  const preferenceLabels: Record<keyof Preferences, string> = {
    safety: 'Safety',
    affordability: 'Affordability',
    transit: 'Transit',
    greenSpaces: 'Green spaces',
    nightlife: 'Nightlife',
    education: 'Education',
    healthcare: 'Healthcare',
    culture: 'Culture',
  };
  const topPriorities = (Object.keys(preferences) as Array<keyof Preferences>)
    .sort((a, b) => preferences[b] - preferences[a])
    .slice(0, 3)
    .filter((key) => preferences[key] > 0)
    .map((key) => preferenceLabels[key]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            Your Perfect Neighborhood Matches
          </h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Based on your preferences, we found these neighborhoods that best fit your lifestyle
        </p>
        {topPriorities.length > 0 && (
          <p className="mt-3 text-sm text-gray-500">
            Your top priorities: {topPriorities.join(', ')}
          </p>
        )}
      </div>

      {topMatch && (
        <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <div className="text-center mb-6">
            <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🎯 Top Match
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {topMatch.name}, {topMatch.city}
            </h2>
            <p className="text-lg text-gray-600 mb-4">{topMatch.description}</p>
            <div className="text-3xl font-bold text-blue-600">
              {Math.round((topMatch.matchScore || 0) * 100)}% Match
            </div>
          </div>
          <button
            onClick={() => onNeighborhoodSelect(topMatch)}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Explore {topMatch.name}
          </button>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {neighborhoods.map((neighborhood, index) => (
          <NeighborhoodCard
            key={neighborhood.id}
            neighborhood={neighborhood}
            rank={index + 1}
            onClick={() => onNeighborhoodSelect(neighborhood)}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Don't see what you're looking for? Try adjusting your preferences.
        </p>
        <button
          onClick={() => window.history.back()}
          className="text-blue-600 hover:text-blue-700 font-semibold"
        >
          Modify Your Preferences
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;