import "./style/Pants.css"
import {useState} from "react";

const DragAndDropImages = () => {
    const [selectedImage, setSelectedImage] = useState("");

    const handleDrop = (event) => {
        event.preventDefault();
        const imageName = event.dataTransfer.getData("text/plain"); // Récupère le nom de l'image
        setSelectedImage(imageName);
    };

    const handleDragOver = (event) => {
        event.preventDefault(); // Permet le drop
    };

    return (
        <div>
            <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{
                    width: "200px",
                    height: "150px",
                    border: "2px dashed #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                {selectedImage ? <p>Vêtement sélectionné : {selectedImage}</p> : <p>Déposez un vêtement ici</p>}
            </div>
        </div>
    )
}

export default DragAndDropImages;
