import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function Giorgi() {

  return (
    <h1>My name is giorgi</h1>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Giorgi />
  </StrictMode>,
)
