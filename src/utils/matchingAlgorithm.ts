import { Preferences, Neighborhood } from '../types';
import { neighborhoods } from '../data/neighborhoods';

export const findMatchingNeighborhoods = (preferences: Preferences): Neighborhood[] => {
  // Calculate match scores for all neighborhoods
  const neighborhoodsWithScores = neighborhoods.map(neighborhood => {
    const score = calculateMatchScore(neighborhood, preferences);
    return {
      ...neighborhood,
      matchScore: score
    };
  });

  // Sort by match score (highest first) and return top matches
  return neighborhoodsWithScores
    .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0))
    .slice(0, 6);
};

const calculateMatchScore = (neighborhood: Neighborhood, preferences: Preferences): number => {
  const weights = normalizeWeights(preferences);
  const data = neighborhood.data;
  
  const score = 
    weights.safety * data.safety +
    weights.affordability * data.affordability +
    weights.transit * data.transit +
    weights.greenSpaces * data.greenSpaces +
    weights.nightlife * data.nightlife +
    weights.education * data.education +
    weights.healthcare * data.healthcare +
    weights.culture * data.culture;

  return Math.round(score * 100) / 100; // Round to 2 decimal places
};

const normalizeWeights = (preferences: Preferences): Preferences => {
  const total = Object.values(preferences).reduce((sum, value) => sum + value, 0);
  
  if (total === 0) {
    // If all preferences are 0, give equal weight to all
    const equalWeight = 1 / Object.keys(preferences).length;
    return Object.keys(preferences).reduce((acc, key) => ({
      ...acc,
      [key]: equalWeight
    }), {} as Preferences);
  }

  // Normalize so weights sum to 1
  return Object.entries(preferences).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value / total
  }), {} as Preferences);
};