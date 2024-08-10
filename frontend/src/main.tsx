import React from 'react'
import './global.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import Auth0providerwithNavigate from './auth/Auth0providerwithNavigate'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
      <Auth0providerwithNavigate>
      <AppRoutes/>
      <Toaster visibleToasts={1} position="top-right" richColors/>
      </Auth0providerwithNavigate>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
)
