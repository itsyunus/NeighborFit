# NeighborFit - Smart Lifestyle-Based Neighborhood Matcher

🧠 Match people to ideal neighborhoods using real data and personalized preferences.

## 🌐 Live Demo
- **Frontend**: [Deploy on Vercel](https://neighborfit.vercel.app)
- **Repository**: [GitHub](https://github.com/yourusername/neighborfit)

## 🚀 Features

- **Smart Matching Algorithm**: Uses weighted scoring based on user preferences
- **Interactive Preferences**: Slider-based interface for setting lifestyle priorities
- **Detailed Neighborhood Profiles**: Comprehensive information about each area
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Real-time Results**: Instant neighborhood matching and ranking

## 🧩 How It Works

1. **Set Preferences**: Users adjust sliders for factors like safety, affordability, transit access, etc.
2. **Smart Analysis**: Algorithm calculates weighted scores based on neighborhood data
3. **Get Matches**: View ranked neighborhoods with detailed match percentages
4. **Explore Details**: Dive deep into neighborhood profiles and score breakdowns

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📊 Matching Algorithm

The app uses a sophisticated weighted scoring system:

```
MatchScore = Σ (user_weight[i] × normalized_neighborhood_value[i])
```

Where:
- User weights are normalized from preference sliders (0-10 scale)
- Neighborhood values are pre-normalized (0-1 scale)
- Final scores are ranked to show best matches first

## 🏗️ Project Structure

```
neighborfit/
├── src/
│   ├── components/          # React components
│   │   ├── HomePage.tsx
│   │   ├── PreferencesForm.tsx
│   │   ├── ResultsPage.tsx
│   │   ├── NeighborhoodCard.tsx
│   │   ├── NeighborhoodDetail.tsx
│   │   └── ScoreBreakdown.tsx
│   ├── data/               # Neighborhood dataset
│   │   └── neighborhoods.ts
│   ├── utils/              # Matching algorithm
│   │   └── matchingAlgorithm.ts
│   ├── types/              # TypeScript definitions
│   │   └── index.ts
│   └── App.tsx             # Main application
├── public/                 # Static assets
├── vercel.json            # Vercel configuration
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm 8+

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/neighborfit.git
   cd neighborfit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect the settings and deploy

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your app will be live!

## 📊 Dataset

The app includes sample data for 8 diverse neighborhoods across major US cities:

- **New York**: Williamsburg, Park Slope, Astoria
- **Boston**: Back Bay
- **Seattle**: Capitol Hill, Fremont  
- **San Francisco**: Mission District
- **Los Angeles**: Highland Park

Each neighborhood includes data for:
- Safety scores
- Affordability ratings
- Transit accessibility
- Green space availability
- Nightlife options
- Education quality
- Healthcare access
- Cultural amenities

## 🔧 Configuration

### Environment Variables

No environment variables required for basic functionality.

### Vercel Configuration

The project includes a `vercel.json` file with optimized settings:
- Static build configuration
- SPA routing support
- Build optimization

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** formatting (recommended)
- **Tailwind CSS** for consistent styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Neighborhood data compiled from public sources
- Icons provided by [Lucide](https://lucide.dev)
- Images from [Pexels](https://pexels.com)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**