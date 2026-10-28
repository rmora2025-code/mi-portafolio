import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // se supone que tengo que agregar esto... ayuda porqué se ve gris
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <App />      /* App envuelto en BrowserRouter */
    </BrowserRouter>
  </StrictMode>,
)
