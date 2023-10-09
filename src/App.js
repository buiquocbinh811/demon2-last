import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./Header";
import Product from "./Product"
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
    <Header />
    <Product/>
    <Contact/>
 
    </div>
  );
};

export default App;
