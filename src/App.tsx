import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Routers from './Components/Routers';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
