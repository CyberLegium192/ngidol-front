import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'aos/dist/aos.css'; // Impor stylesheet AOS
import AOS from 'aos';
AOS.init(); // Inisialisasi AOS
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
