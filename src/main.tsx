import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ReactOpenAIApp } from './ReactOpenAIApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactOpenAIApp />
  </StrictMode>,
)
