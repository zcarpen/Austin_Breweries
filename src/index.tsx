import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {console.log('app loads in index.tsx')}
    <App />
  </React.StrictMode>
)
