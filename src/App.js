import React from 'react';
import './App.css';
import ClockCard from './cards/ClockCard'
import BikeCard from './cards/BikeCard';
import BusCard from './cards/BusCard';
import BikeCardV2 from './cards/BikeCardV2';

function App() {
  return (
    <div className="App">
        <div className="background">
            <BikeCardV2/>
        </div>
        <div className="items">
        <ClockCard />
        <BusCard />
        </div>
    </div>
  );
}

export default App;
