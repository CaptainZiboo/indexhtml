import Pantalon1 from './assets/Cloth/téléchargement.jpg';
import Pantalon2 from './assets/Cloth/téléchargement (1).jpg';
import Pantalon3 from './assets/Cloth/téléchargement (2).jpg';
import Pantalon4 from './assets/Cloth/images (1).jpg';
import Pantalon5 from './assets/Cloth/images.jpg';
import "./style/Pants.css"



function Pants() {
    const handleDragStart = (event, imageName) => {
        event.dataTransfer.setData("text/plain", imageName); // Stocke le nom de l'image
        console.log(imageName)
    }

    return (
        <div className="board">

            <div className="Card">
                <img key="Pantalon1" src={Pantalon1} alt="Pant1" draggable="true" onDragStart={(event) => handleDragStart(event, "Pantalon1")}/>
                <p>Pantalon 1</p>
            </div>
            <div className="Card">
                <img key="Pantalon2" src={Pantalon2} alt="Pant1"/>
                <p>Pantalon 2</p>
            </div>
            <div className="Card">
                <img src={Pantalon3} alt="Pant1"/>
                <p>Pantalon 3</p>
            </div>
            <div className="Card">
                <img src={Pantalon4} alt="Pant1"/>
                <p>Pantalon 4</p>
            </div>
            <div className="Card">
                <img src={Pantalon5} alt="Pant1"/>
                <p>Pantalon 5</p>
            </div>
        </div>
    )

}

export default Pants
