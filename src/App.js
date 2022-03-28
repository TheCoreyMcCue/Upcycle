import React from 'react';
import './App.css';
import { Home, Navbar } from './components';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
