import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./header.jsx";
import Pants from "./Pantx.jsx";
import DragAndDropImages from "./drop_cloth.jsx";


createRoot(document.getElementById('header')).render(
    <StrictMode>
        <Header />
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
