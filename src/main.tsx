// import { ClerkProvider } from '@clerk/clerk-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

import { AuthProvider } from './contexts/AuthContext' // <-- Adicione isso

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
export const PLANT_STORE_API_URL = import.meta.env.VITE_PLANT_STORE_API_URL

if (!PLANT_STORE_API_URL) {
  throw new Error('Missing API URL')
}

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing Publishable Key')
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl={'/'}> */}
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    {/* </ClerkProvider> */}
  </StrictMode>
)
