import React from 'react';
import './App.css';
import CalculateScore from '../src/Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name={"Shreya Chopra"} 
        School={"KIET Group of Institutions"} 
        total={450} 
        goal={5} 
      />
    </div>
  );
}

export default App;

