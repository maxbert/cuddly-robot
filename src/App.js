import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import ClockCard from './cards/ClockCard'
import BikeCard from './cards/BikeCard';
import BusCard from './cards/BusCard';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={6}>
          <BikeCard/>
        </Grid>
        <Grid item xs={6}>
          <ClockCard style={{height:"50%"}}/>
          <BusCard style={{height:"50%"}}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
