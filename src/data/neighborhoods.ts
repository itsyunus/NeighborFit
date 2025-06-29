import { Neighborhood } from '../types';

export const neighborhoods: Neighborhood[] = [
  {
    id: '1',
    name: 'Williamsburg',
    city: 'Brooklyn, NY',
    description: 'A vibrant neighborhood known for its artistic community, trendy restaurants, and waterfront views.',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    data: {
      safety: 0.85,
      affordability: 0.3,
      transit: 0.9,
      greenSpaces: 0.4,
      nightlife: 0.95,
      education: 0.8,
      healthcare: 0.85,
      culture: 0.98
    },
    highlights: ['Excellent nightlife', 'Great transit access', 'Rich cultural scene'],
    demographics: {
      averageAge: 28,
      familyFriendly: false,
      walkScore: 89
    }
  },
  {
    id: '2',
    name: 'Park Slope',
    city: 'Brooklyn, NY',
    description: 'Family-friendly neighborhood with tree-lined streets, excellent schools, and proximity to Prospect Park.',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    data: {
      safety: 0.95,
      affordability: 0.4,
      transit: 0.8,
      greenSpaces: 0.9,
      nightlife: 0.6,
      education: 0.95,
      healthcare: 0.9,
      culture: 0.8
    },
    highlights: ['Top-rated schools', 'Very safe', 'Great parks and green spaces'],
    demographics: {
      averageAge: 35,
      familyFriendly: true,
      walkScore: 88
    }
  },
  {
    id: '3',
    name: 'Astoria',
    city: 'Queens, NY',
    description: 'Diverse, affordable neighborhood with excellent food scene and growing arts community.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    data: {
      safety: 0.8,
      affordability: 0.7,
      transit: 0.85,
      greenSpaces: 0.6,
      nightlife: 0.75,
      education: 0.7,
      healthcare: 0.75,
      culture: 0.85
    },
    highlights: ['Very affordable', 'Diverse food scene', 'Good transit connections'],
    demographics: {
      averageAge: 32,
      familyFriendly: true,
      walkScore: 78
    }
  },
  {
    id: '4',
    name: 'Back Bay',
    city: 'Boston, MA',
    description: 'Upscale neighborhood with Victorian architecture, high-end shopping, and excellent dining.',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    data: {
      safety: 0.9,
      affordability: 0.2,
      transit: 0.95,
      greenSpaces: 0.7,
      nightlife: 0.8,
      education: 0.9,
      healthcare: 0.95,
      culture: 0.9
    },
    highlights: ['Excellent healthcare', 'Premium shopping', 'Beautiful architecture'],
    demographics: {
      averageAge: 30,
      familyFriendly: false,
      walkScore: 93
    }
  },
  {
    id: '5',
    name: 'Capitol Hill',
    city: 'Seattle, WA',
    description: 'Hip neighborhood known for its coffee culture, music venues, and LGBTQ+ friendly community.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    data: {
      safety: 0.75,
      affordability: 0.45,
      transit: 0.8,
      greenSpaces: 0.6,
      nightlife: 0.9,
      education: 0.8,
      healthcare: 0.8,
      culture: 0.95
    },
    highlights: ['Vibrant music scene', 'Great coffee culture', 'Inclusive community'],
    demographics: {
      averageAge: 29,
      familyFriendly: false,
      walkScore: 85
    }
  },
  {
    id: '6',
    name: 'Mission District',
    city: 'San Francisco, CA',
    description: 'Culturally rich neighborhood with amazing Mexican food, street art, and tech proximity.',
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    data: {
      safety: 0.6,
      affordability: 0.3,
      transit: 0.7,
      greenSpaces: 0.4,
      nightlife: 0.85,
      education: 0.75,
      healthcare: 0.7,
      culture: 0.95
    },
    highlights: ['Amazing street art', 'Authentic food scene', 'Rich cultural diversity'],
    demographics: {
      averageAge: 31,
      familyFriendly: false,
      walkScore: 82
    }
  },
  {
    id: '7',
    name: 'Highland Park',
    city: 'Los Angeles, CA',
    description: 'Artistic neighborhood with craft breweries, galleries, and affordable housing options.',
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    data: {
      safety: 0.7,
      affordability: 0.6,
      transit: 0.5,
      greenSpaces: 0.5,
      nightlife: 0.8,
      education: 0.65,
      healthcare: 0.65,
      culture: 0.9
    },
    highlights: ['Growing arts scene', 'Craft beer culture', 'More affordable than central LA'],
    demographics: {
      averageAge: 33,
      familyFriendly: true,
      walkScore: 65
    }
  },
  {
    id: '8',
    name: 'Fremont',
    city: 'Seattle, WA',
    description: 'Quirky neighborhood known for its unique character, local businesses, and Sunday market.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    data: {
      safety: 0.85,
      affordability: 0.55,
      transit: 0.75,
      greenSpaces: 0.8,
      nightlife: 0.7,
      education: 0.8,
      healthcare: 0.8,
      culture: 0.85
    },
    highlights: ['Unique local character', 'Great farmers market', 'Close to water and parks'],
    demographics: {
      averageAge: 36,
      familyFriendly: true,
      walkScore: 80
    }
  }
];