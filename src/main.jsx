import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const SITE_ID = '98dba1e9-a518-46ac-8eaf-49df416a3b28';

function WrapperApp() {
  useEffect(() => {
    if (window.PixelFactoryAnalytics) {
      window.PixelFactoryAnalytics.trackPageView(SITE_ID);
      window.PixelFactoryAnalytics.setupClickTracking(SITE_ID);
    }
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WrapperApp />
  </StrictMode>,
)
