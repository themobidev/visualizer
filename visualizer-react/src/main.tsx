import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/main.css'
import App from './App.tsx'
import { BuilderProvider } from './providers/BuilderProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BuilderProvider>
      <App />
    </BuilderProvider>
  </StrictMode>
)
