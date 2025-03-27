import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "./header.jsx";
import Pants from "./Pantx.jsx";


createRoot(document.getElementById('header')).render(
    <StrictMode>
        <Header />
    </StrictMode>,
)
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
