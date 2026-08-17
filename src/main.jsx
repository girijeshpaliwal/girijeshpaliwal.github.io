import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Perform the redirect immediately
window.location.replace('https://girijeshpaliwal.vercel.app/');

// You can safely remove the createRoot(...) block below 
// since the user will be redirected before the app renders.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
