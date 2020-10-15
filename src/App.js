import React from 'react';
import './App.css';
import ClockCard from './cards/ClockCard'
import BikeCard from './cards/BikeCard';
import BusCard from './cards/BusCard';

function App() {
  return (
    <div className="App">
        <div className="background">
            <BikeCard/>
        </div>
        <div className="items">
        <ClockCard />
        <BusCard />
        </div>
    </div>
  );
}

export default App;
