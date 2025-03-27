import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./header.jsx";
import Pants from "./Pantx.jsx";
import DragAndDropImages from "./components/drop_cloth.jsx";
import Navbar from "./components/Navbar.jsx";


createRoot(document.getElementById('header')).render(
    <StrictMode>
        <Navbar />
    </StrictMode>,
)
createRoot(document.getElementById('pants')).render(
    <StrictMode>
        <Pants />
    </StrictMode>,
)

createRoot(document.getElementById('drop')).render(
    <StrictMode>
        <DragAndDropImages />
    </StrictMode>,
)
