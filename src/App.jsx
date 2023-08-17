import Form from './Components/Form'
import './App.css'
import { useState } from 'react';

function App() {

  return (
    <>
    <div className="App">
      <h1>Bienvenido al cine Showcase</h1>
      <h2>Para optimizar tu experiencia, completá los siguientes datos:</h2>
      <Form />  
    </div>
    
    </>
  );
}

export default App
