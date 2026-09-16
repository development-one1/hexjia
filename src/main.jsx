import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Escala from './pages/Escala.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/hexjia">
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/escala" element={<Escala />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)