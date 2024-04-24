import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="content">
        <h1 className='titulo'>Farmacia GLR </h1>
        <h2 className='titulo'>Melhor Farmacia do Brasil.</h2>
      </div>
      <Footer />
    </div>
  );
};

export default App;
