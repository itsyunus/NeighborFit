export interface Preferences {
  safety: number;
  affordability: number;
  transit: number;
  greenSpaces: number;
  nightlife: number;
  education: number;
  healthcare: number;
  culture: number;
}

export interface NeighborhoodData {
  safety: number;
  affordability: number;
  transit: number;
  greenSpaces: number;
  nightlife: number;
  education: number;
  healthcare: number;
  culture: number;
}

export interface Neighborhood {
  id: string;
  name: string;
  city: string;
  description: string;
  image: string;
  data: NeighborhoodData;
  matchScore?: number;
  highlights: string[];
  demographics: {
    averageAge: number;
    familyFriendly: boolean;
    walkScore: number;
  };
}