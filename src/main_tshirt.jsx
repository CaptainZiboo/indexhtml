import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./header.jsx";
import T_shirt from "./tshirt.jsx";
import DragAndDropImages from "./drop_cloth.jsx";


createRoot(document.getElementById('header')).render(
    <StrictMode>
        <Header />
    </StrictMode>,
)
createRoot(document.getElementById('pants')).render(
    <StrictMode>
        <T_shirt />
    </StrictMode>,
)

createRoot(document.getElementById('drop')).render(
    <StrictMode>
        <DragAndDropImages />
    </StrictMode>,
)
