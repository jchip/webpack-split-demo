# Webpack Split Demo

A demonstration project showcasing code splitting in Webpack with React. This project demonstrates how to optimize bundle size by splitting vendor code from application code.

## Features

- React 18 with modern JavaScript features
- Webpack 5 configuration with code splitting
- Babel configuration for React and modern JavaScript
- Development server with hot module replacement
- Production build optimization

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd webpack-split-demo
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

- `npm start` - Runs the development server on port 3000 with hot module replacement
- `npm run build` - Creates a production build in the `dist` directory

## Project Structure

```
webpack-split-demo/
├── src/
│   ├── index.js      # Application entry point
│   └── index.html    # HTML template
├── dist/             # Production build output
├── webpack.config.js # Webpack configuration
└── package.json      # Project dependencies and scripts
```

## Webpack Configuration

The project uses Webpack 5 with the following key features:

- Code splitting for vendor modules
- Content hash for cache busting
- Babel loader for React and modern JavaScript
- HTML Webpack Plugin for HTML template processing
- Development server with hot module replacement

## License

ISC 