import React, { useState } from 'react';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
