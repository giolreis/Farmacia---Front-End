import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <span className="text-white text-xl font-bold">Farmácia</span>
          <div>
            <span className="text-white mr-4">Categorias</span>
            <span className="text-white">Produtos</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
