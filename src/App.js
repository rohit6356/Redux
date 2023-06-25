import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Products from './components/Products';

function App() {
  return (
    <div className="container">
      <Navbar />
     
     <h2 className='mt-3 text-center'>Buy each shoes for 1000 ruppes only</h2>
    
     <div style={{display:"flex" , justifyContent:"space-around"}}>
      <Shop/>
     <Products/>
     </div>

    </div>
  );
}

export default App;
