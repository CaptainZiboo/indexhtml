import React from "react";

const GrilleOutfit = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 justify-between h-[550px] mt-8 ">
      {/* Vêtement 1 */}
      <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg h-full h-[220px]">
        <img
          src="https://www.detailsinvites.com/25394-large_default/lot-chapeaux-mariage-blanc-25-chapeaux-.jpg"
          alt="Vêtement 1"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Vêtement 2 */}
      <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg h-full h-[220px]">
        <img
          src="https://static.fursac.com/data/manteau-drap-de-laine-et-cachemire-homme-manteaux-mi-longs-noir-m3ekom-rm31-20-plb830665.1719924408.jpg"
          alt="Vêtement 2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Vêtement 3 */}
      <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg h-full h-[220px]">
        <img
          src="https://cdn.store-factory.com/www.patoutatis.com/content/product_11611890b.jpg?v=1662120644"
          alt="Vêtement 3"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Vêtement 4 */}
      <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg h-full h-[220px]">
        <img
          src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRU-HvBUbhZUzEXONmAEEDETTA0bepdeO3PB4Ho6NiKgFETMVq8AJh5kRzCyEuPR3k59Qo8cuq_LSrfKWF-jdZc3MwFayoLTlpMa0SkD8YUYtBXywRLCh327ku-yvagk_bnA3GXXJZuQ&usqp=CAc"
          alt="Vêtement 4"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default GrilleOutfit;
