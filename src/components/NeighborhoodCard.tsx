import React from 'react';
import { Neighborhood } from '../types';
import { MapPin, Star, Users, TrendingUp } from 'lucide-react';

interface NeighborhoodCardProps {
  neighborhood: Neighborhood;
  rank: number;
  onClick: () => void;
}

const NeighborhoodCard: React.FC<NeighborhoodCardProps> = ({ 
  neighborhood, 
  rank, 
  onClick 
}) => {
  const matchPercentage = Math.round((neighborhood.matchScore || 0) * 100);

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-200"
    >
      <div className="relative">
        <img
          src={neighborhood.image}
          alt={neighborhood.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            #{rank}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
            {matchPercentage}% match
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start mb-3">
          <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {neighborhood.name}
            </h3>
            <p className="text-gray-600">{neighborhood.city}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-2">
          {neighborhood.description}
        </p>

        <div className="space-y-3 mb-4">
          {neighborhood.highlights.slice(0, 2).map((highlight, index) => (
            <div key={index} className="flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
              {highlight}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            Age {neighborhood.demographics.averageAge}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            Walk Score {neighborhood.demographics.walkScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodCard;