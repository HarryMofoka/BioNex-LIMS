/**
 * Entry point for the React application.
 * 
 * Lessons & Explanations:
 * - `createRoot`: Introduced in React 18, it enables concurrent features and better performance compared to the legacy `render`.
 * - `StrictMode`: A tool for highlighting potential problems in an application. It does not render any visible UI. It activates additional checks and warnings for its descendants. Note: in development, it intentionally double-invokes methods to detect side effects.
 * - `index.css`: This is where global styles, including Tailwind directives, are imported.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Select the root DOM node and initialize the React tree
createRoot(document.getElementById('root')).render(
  // StrictMode wraps the entire app to ensure best practices are followed globally
  <StrictMode>
    <App />
  </StrictMode>,
)
