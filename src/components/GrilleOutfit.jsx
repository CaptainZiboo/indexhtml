import React from "react";
import marcel1 from '../assets/Cloth/marcel_one.jpg' ;
import marcel2 from '../assets/Cloth/marcel_red.jpg' ;
import hat from '../assets/Cloth/hat.png' ;
import skirt from '../assets/Cloth/skirt.png' ;

const GrilleOutfit = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 justify-between h-[550px] mt-8 ">
      {/* Vêtement 1 */}


      <div className="flex flex-col items-center bg-[#6ea7e8] p-4 rounded-lg h-full h-[220px] cursor-grab active:cursor-grabbing" draggable="true"
         onDragStart={(e) => {
          e.dataTransfer.setData("Top_hat|fbx|head|black|53 cm|0x0f0c0c|1|1|1|0|0", "dragging"); // Set data to allow drop
          e.dataTransfer.effectAllowed = "move"; // Ensure moving is allowed
        }}
      >


        <img
          src={hat}
          alt="Vêtement 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Vêtement 2 */}


      <div className="flex flex-col items-center bg-[#6ea7e8] p-4 rounded-lg h-full h-[220px] cursor-grab active:cursor-grabbing" draggable="true"
         onDragStart={(e) => {
          e.dataTransfer.setData("marcel|fbx|torso|navie blue|L|0x1c34f5|0.004|0.0038|0.0038|0.41|0.021", "dragging"); // Set data to allow drop
          e.dataTransfer.effectAllowed = "move"; // Ensure moving is allowed
        }}
      >


        <img
          src={marcel1}
          alt="Vêtement 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Vêtement 3 */}


      <div className="flex flex-col items-center bg-[#6ea7e8] p-4 rounded-lg h-full h-[220px] cursor-grab active:cursor-grabbing" draggable="true"
         onDragStart={(e) => {
          e.dataTransfer.setData("marcel_red|fbx|torso|bordeaux|L|0x8b0b16|0.004|0.0038|0.0038|0.38|0.021", "dragging"); // Set data to allow drop
          e.dataTransfer.effectAllowed = "move"; // Ensure moving is allowed
        }}
      >


        <img
          src={marcel2}
          alt="Vêtement 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Vêtement 4 */}


      <div className="flex flex-col items-center bg-[#6ea7e8] p-4 rounded-lg h-full h-[220px] cursor-grab active:cursor-grabbing" draggable="true"
         onDragStart={(e) => {
          e.dataTransfer.setData("marcel|fbx|torso|navie blue|L|0x1c34f5|0.004|0.0038|0.0038|0.41|0.021", "dragging"); // Set data to allow drop
          e.dataTransfer.effectAllowed = "move"; // Ensure moving is allowed
        }}
      >


        <img
          src={skirt}
          alt="Vêtement 4"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default GrilleOutfit;
