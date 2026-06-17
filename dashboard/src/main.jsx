import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Devices from './Devices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Devices/>
  </StrictMode>,
)
