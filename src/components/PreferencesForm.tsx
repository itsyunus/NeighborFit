import React, { useState } from 'react';
import { Preferences } from '../types';
import { Shield, DollarSign, Train, Trees, Music, GraduationCap, Heart, Palette } from 'lucide-react';

interface PreferencesFormProps {
  onSubmit: (preferences: Preferences) => void;
}

const PreferencesForm: React.FC<PreferencesFormProps> = ({ onSubmit }) => {
  const [preferences, setPreferences] = useState<Preferences>({
    safety: 5,
    affordability: 5,
    transit: 5,
    greenSpaces: 5,
    nightlife: 5,
    education: 5,
    healthcare: 5,
    culture: 5,
  });

  const handleSliderChange = (key: keyof Preferences, value: number) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  const preferenceConfig = [
    {
      key: 'safety' as keyof Preferences,
      label: 'Safety & Security',
      icon: Shield,
      description: 'Low crime rates and safe streets',
      color: 'text-green-600'
    },
    {
      key: 'affordability' as keyof Preferences,
      label: 'Affordability',
      icon: DollarSign,
      description: 'Reasonable housing costs and living expenses',
      color: 'text-emerald-600'
    },
    {
      key: 'transit' as keyof Preferences,
      label: 'Public Transit',
      icon: Train,
      description: 'Good public transportation access',
      color: 'text-blue-600'
    },
    {
      key: 'greenSpaces' as keyof Preferences,
      label: 'Green Spaces',
      icon: Trees,
      description: 'Parks, gardens, and outdoor areas',
      color: 'text-green-700'
    },
    {
      key: 'nightlife' as keyof Preferences,
      label: 'Nightlife & Entertainment',
      icon: Music,
      description: 'Bars, restaurants, and entertainment venues',
      color: 'text-purple-600'
    },
    {
      key: 'education' as keyof Preferences,
      label: 'Education',
      icon: GraduationCap,
      description: 'Quality schools and educational resources',
      color: 'text-indigo-600'
    },
    {
      key: 'healthcare' as keyof Preferences,
      label: 'Healthcare',
      icon: Heart,
      description: 'Access to medical facilities and services',
      color: 'text-red-600'
    },
    {
      key: 'culture' as keyof Preferences,
      label: 'Arts & Culture',
      icon: Palette,
      description: 'Museums, galleries, and cultural activities',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          What matters most to you?
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Adjust the sliders to tell us how important each factor is for your ideal neighborhood
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-8 md:grid-cols-2">
          {preferenceConfig.map(({ key, label, icon: Icon, description, color }) => (
            <div key={key} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-4">
                <div className={`${color} bg-gray-50 rounded-lg p-3 mr-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {label}
                  </h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Not Important</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {preferences[key]}
                  </span>
                  <span className="text-sm text-gray-500">Very Important</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="1"
                  value={preferences[key]}
                  onChange={(e) => handleSliderChange(key, parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #e5e7eb 0%, #e5e7eb ${preferences[key] * 10}%, #3b82f6 ${preferences[key] * 10}%, #3b82f6 100%)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Find My Perfect Neighborhoods
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreferencesForm;