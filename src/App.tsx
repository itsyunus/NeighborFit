import React, { useState } from 'react';
import { MapPin, ArrowLeft } from 'lucide-react';
import HomePage from './components/HomePage';
import PreferencesForm from './components/PreferencesForm';
import ResultsPage from './components/ResultsPage';
import NeighborhoodDetail from './components/NeighborhoodDetail';
import { Preferences, Neighborhood } from './types';
import { findMatchingNeighborhoods } from './utils/matchingAlgorithm';

type Page = 'home' | 'preferences' | 'results' | 'detail';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [preferences, setPreferences] = useState<Preferences | null>(null);
  const [matchedNeighborhoods, setMatchedNeighborhoods] = useState<Neighborhood[]>([]);
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<Neighborhood | null>(null);

  const handlePreferencesSubmit = (prefs: Preferences) => {
    setPreferences(prefs);
    const matches = findMatchingNeighborhoods(prefs);
    setMatchedNeighborhoods(matches);
    setCurrentPage('results');
  };

  const handleNeighborhoodSelect = (neighborhood: Neighborhood) => {
    setSelectedNeighborhood(neighborhood);
    setCurrentPage('detail');
  };

  const handleBack = () => {
    if (currentPage === 'detail') {
      setCurrentPage('results');
    } else if (currentPage === 'results') {
      setCurrentPage('preferences');
    } else if (currentPage === 'preferences') {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onGetStarted={() => setCurrentPage('preferences')} />;
      case 'preferences':
        return <PreferencesForm onSubmit={handlePreferencesSubmit} />;
      case 'results':
        return (
          <ResultsPage
            neighborhoods={matchedNeighborhoods}
            preferences={preferences!}
            onNeighborhoodSelect={handleNeighborhoodSelect}
          />
        );
      case 'detail':
        return (
          <NeighborhoodDetail
            neighborhood={selectedNeighborhood!}
            preferences={preferences!}
          />
        );
      default:
        return <HomePage onGetStarted={() => setCurrentPage('preferences')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Header */}
      {currentPage !== 'home' && (
        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={handleBack}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" />
                  Back
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">NeighborFit</span>
              </div>
              <div className="w-16" /> {/* Spacer for centering */}
            </div>
          </div>
        </nav>
      )}

      {renderPage()}
    </div>
  );
}

export default App;