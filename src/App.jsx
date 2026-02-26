/**
 * Main Application Component mapping URLs to React Components.
 * 
 * Lessons & Explanations:
 * - `react-router-dom`: We use React Router for Single Page Application (SPA) navigation. This means moving between pages does not trigger a full browser refresh, resulting in a much faster user experience.
 * - `HelmetProvider`: This is required by `react-helmet-async` to manage state for meta tags without memory leaks, especially useful if SSR (Server-Side Rendering) is ever implemented.
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import SupportPage from './pages/SupportPage';
import POPIAPortalPage from './pages/POPIAPortalPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    /* Wraps the app to enable asynchronous SEO capability */
    <HelmetProvider>
      {/* Router establishes the root routing context */}
      <Router>
        {/* Routes ensures that only one Route matches the current URL at a time */}
        <Routes>
          {/* Each Route defines a path and the component to render when the URL matches */}
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/popia" element={<POPIAPortalPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
