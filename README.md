# NeighborFit - Lifestyle-Based Neighborhood Matching Engine

An algorithmic real estate discovery engine that matches prospective residents to ideal urban neighborhoods based on custom lifestyle preference weightings, commute requirements, and amenity proximity.

## Technical Architecture

- Framework: React 18 + TypeScript + Vite
- Styling: Tailwind CSS
- Matching Algorithm (`matchingAlgorithm.ts`): Multi-variable weighted Euclidean distance calculation scoring candidate neighborhoods across safety, transit, nightlife, education, and affordability vectors.
- Component Design: Fully modular component hierarchy featuring interactive preference forms, dynamic scoring breakdowns, and detailed neighborhood inspect cards.

## Getting Started

```bash
# Clone repository
git clone https://github.com/itsyunus/NeighborFit.git
cd NeighborFit

# Install dependencies
npm install

# Run type check and start development server
npm run type-check
npm run dev
```
