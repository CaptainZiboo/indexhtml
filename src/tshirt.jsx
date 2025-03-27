import "./style/Pants.css"
import t_shirt1 from './assets/Cloth/t_shirt1.jpg';
import t_shirt2 from './assets/Cloth/t_shirt2.jpg';
import t_shirt3 from './assets/Cloth/T_shirt3.jpg';
import t_shirt4 from './assets/Cloth/t_shirt4.jpg';

function T_shirt() {
    const handleDragStart = (event, imageName) => {
        event.dataTransfer.setData("text/plain", imageName); // Stocke le nom de l'image
        console.log(imageName)
    }

    return (
        <div className="board">

            <div className="Card">
                <img key="T-Shirt 1" src={t_shirt1} alt="Pant1" draggable="true"
                     onDragStart={(event) => handleDragStart(event, "Pantalon1")}/>
                <p>T-Shirt 1</p>
            </div>
            <div className="Card">
                <img key="T-Shirt 2" src={t_shirt2} alt="Pant1"/>
                <p>T-Shirt 2</p>
            </div>
            <div className="Card">
                <img key="T-Shirt " src={t_shirt3} alt="Pant1"/>
                <p>T-Shirt 3</p>
            </div>
            <div className="Card">
                <img key="T-Shirt " src={t_shirt4} alt="Pant1"/>
                <p>T-Shirt 4</p>
            </div>

        </div>
    )

}

export default T_shirt
