import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Clock from 'react-live-clock';
import ReactFitText from 'react-fittext'
import './styles/ClockCard.css';
function ClockCard () {
    return ( 
            <Grid className="clockCard">
            <ReactFitText compressor={0.35}>
            <h1 className="clock">
            <Clock format="h:mm" ticking={true}/>
            </h1>
            </ReactFitText>
            </Grid>
    );
}

export default ClockCard;