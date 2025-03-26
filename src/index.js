import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// We'll create the root once React DOM is loaded
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />); 