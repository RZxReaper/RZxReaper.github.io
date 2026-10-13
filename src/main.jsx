import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Invention from './Invention.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/invention" element={<Invention />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
