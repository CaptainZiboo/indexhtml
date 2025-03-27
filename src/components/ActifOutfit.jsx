import React from 'react';

const ActifOutfit = () => {
  return (
    <div className="  flex flex-col items-center gap-5 w-15vw justify-around ">
      <div className="border border-black p-4 w-52 text-center">
        <h3 className="text-lg text-black font-bold">Chapeau</h3>
        <p className="text-sm text-black">Emplacement pour le chapeau</p>
      </div>
      <div className="border border-black p-4 w-52 text-center">
        <h3 className="text-lg text-black font-bold">Vêtement du haut</h3>
        <p className="text-sm text-black">Emplacement pour le vêtement du haut</p>
      </div>
      <div className="border border-black p-4 w-52 text-center">
        <h3 className="text-lg text-black font-bold">Pantalon</h3>
        <p className="text-sm text-black">Emplacement pour le pantalon</p>
      </div>
    </div>
  );
};

export default ActifOutfit;