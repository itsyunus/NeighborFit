# NeighborFit

NeighborFit is a React and TypeScript prototype that scores neighborhoods against a person's lifestyle preferences. It presents a preference form, ranked matches, and a score breakdown so users can see how the selected criteria affect the results.

## How it works

The matching logic compares neighborhood attributes such as safety, transit, nightlife, education, and affordability using the selected weights. The repository contains a Vite frontend with React, TypeScript, and Tailwind CSS.

## Run locally

Requirements: Node.js 18 or later and npm 8 or later.

```bash
git clone https://github.com/itsyunus/NeighborFit.git
cd NeighborFit
npm ci
npm run dev
```

Vite prints the local development URL after startup.

## Available checks

```bash
npm run lint
npm run type-check
npm run build
```

## Scope and data

This is a prototype with bundled neighborhood data. Scores are a product feature demonstration, not a verified ranking of real neighborhoods. Review the source data and scoring weights before using the results to make housing decisions.

## Contributing

Issues and pull requests are welcome. For a proposed change, include the user problem it addresses and steps to reproduce or review it. Before opening a pull request, run the available checks above.

## License

The package metadata declares the MIT License.
