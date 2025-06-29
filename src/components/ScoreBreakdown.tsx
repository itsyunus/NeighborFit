import React from 'react';
import { Neighborhood, Preferences } from '../types';
import { Shield, DollarSign, Train, Trees, Music, GraduationCap, Heart, Palette } from 'lucide-react';

interface ScoreBreakdownProps {
  neighborhood: Neighborhood;
  preferences: Preferences;
}

const ScoreBreakdown: React.FC<ScoreBreakdownProps> = ({ 
  neighborhood, 
  preferences 
}) => {
  const scoreConfig = [
    {
      key: 'safety' as keyof Preferences,
      label: 'Safety',
      icon: Shield,
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      key: 'affordability' as keyof Preferences,
      label: 'Affordability',
      icon: DollarSign,
      color: 'bg-emerald-500',
      bgColor: 'bg-emerald-50'
    },
    {
      key: 'transit' as keyof Preferences,
      label: 'Transit',
      icon: Train,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      key: 'greenSpaces' as keyof Preferences,
      label: 'Green Spaces',
      icon: Trees,
      color: 'bg-green-600',
      bgColor: 'bg-green-50'
    },
    {
      key: 'nightlife' as keyof Preferences,
      label: 'Nightlife',
      icon: Music,
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      key: 'education' as keyof Preferences,
      label: 'Education',
      icon: GraduationCap,
      color: 'bg-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      key: 'healthcare' as keyof Preferences,
      label: 'Healthcare',
      icon: Heart,
      color: 'bg-red-500',
      bgColor: 'bg-red-50'
    },
    {
      key: 'culture' as keyof Preferences,
      label: 'Culture',
      icon: Palette,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="space-y-4">
      {scoreConfig.map(({ key, label, icon: Icon, color, bgColor }) => {
        const score = neighborhood.data[key];
        const importance = preferences[key];
        const scorePercentage = score * 100;
        
        return (
          <div key={key} className={`${bgColor} rounded-lg p-4`}>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <Icon className="h-5 w-5 text-gray-600 mr-2" />
                <span className="font-medium text-gray-900">{label}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  Importance: {importance}/10
                </span>
                <span className="font-semibold text-gray-900">
                  {Math.round(scorePercentage)}%
                </span>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${color} h-2 rounded-full transition-all duration-500`}
                style={{ width: `${scorePercentage}%` }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ScoreBreakdown;