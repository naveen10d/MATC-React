import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './Components/Routers';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Routers/>
      <Footer/>
    </div>
  );
}

export default App;
