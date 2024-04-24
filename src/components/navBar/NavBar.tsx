import React from 'react';
import logo from '../img/logo.png'; // Importe seu logo aqui

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} alt="Farmácia Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <span>Categorias</span>
        <span>Produtos</span>
      </div>
    </nav>
  );
};

export default NavBar;
