import React from 'react'
import './global.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0providerwithNavigate from './auth/Auth0providerwithNavigate'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Auth0providerwithNavigate>
      <AppRoutes/>
      </Auth0providerwithNavigate>
    </Router>
  </React.StrictMode>,
)
