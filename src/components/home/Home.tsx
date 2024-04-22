import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto home-container">
      <h1 className="home-title">Bem-vindo à Farmácia</h1>
      <p className="home-description">
        Sua fonte confiável para todos os produtos farmacêuticos !
      </p>
    </div>
  );
};

export default Home;
