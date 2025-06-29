import React from 'react';
import { Neighborhood, Preferences } from '../types';
import { MapPin, Users, Heart, Star, TrendingUp } from 'lucide-react';
import ScoreBreakdown from './ScoreBreakdown';

interface NeighborhoodDetailProps {
  neighborhood: Neighborhood;
  preferences: Preferences;
}

const NeighborhoodDetail: React.FC<NeighborhoodDetailProps> = ({ 
  neighborhood, 
  preferences 
}) => {
  const matchPercentage = Math.round((neighborhood.matchScore || 0) * 100);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="relative h-64 md:h-80">
          <img
            src={neighborhood.image}
            alt={neighborhood.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <div className="flex items-center mb-2">
              <MapPin className="h-6 w-6 mr-2" />
              <span className="text-lg">{neighborhood.city}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {neighborhood.name}
            </h1>
            <div className="text-2xl font-semibold">
              {matchPercentage}% Match for You
            </div>
          </div>
        </div>

        <div className="p-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {neighborhood.description}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {neighborhood.demographics.averageAge}
              </div>
              <div className="text-gray-600">Average Age</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {neighborhood.demographics.walkScore}
              </div>
              <div className="text-gray-600">Walk Score</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {neighborhood.demographics.familyFriendly ? 'Yes' : 'No'}
              </div>
              <div className="text-gray-600">Family Friendly</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Highlights */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Makes It Special
          </h2>
          <div className="space-y-4">
            {neighborhood.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start">
                <Star className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How It Matches Your Preferences
          </h2>
          <ScoreBreakdown 
            neighborhood={neighborhood} 
            preferences={preferences} 
          />
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodDetail;