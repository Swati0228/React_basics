import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const anotherElement=(
  <a href=" https://www.google.co.in">VISIT GOOGLE</a>
)

createRoot(document.getElementById('root')).render(
  anotherElement
  )