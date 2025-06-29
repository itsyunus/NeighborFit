import React from 'react';
import { MapPin, Target, TrendingUp, Users, ArrowRight } from 'lucide-react';

interface HomePageProps {
  onGetStarted: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <MapPin className="h-12 w-12 text-white mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                NeighborFit
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find your perfect neighborhood match using smart algorithms that understand your lifestyle preferences
            </p>
            <button
              onClick={onGetStarted}
              className="group bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How NeighborFit Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our smart matching algorithm considers what matters most to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Set Preferences</h3>
              <p className="text-gray-600">Tell us what matters most to you - safety, transit, nightlife, and more</p>
            </div>

            <div className="text-center group">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Analysis</h3>
              <p className="text-gray-600">Our algorithm analyzes real neighborhood data to find your best matches</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Matches</h3>
              <p className="text-gray-600">Discover neighborhoods ranked by how well they fit your lifestyle</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore Details</h3>
              <p className="text-gray-600">Dive deep into neighborhood profiles, demographics, and highlights</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to find your perfect neighborhood?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of people who've found their ideal home with NeighborFit
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-blue-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;