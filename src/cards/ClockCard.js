import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Clock from 'react-live-clock';
import ReactFitText from 'react-fittext'
import './styles/SubwayCard.css';
function ClockCard () {
    return ( 
            <Grid className="clockCard">
            <ReactFitText compressor={0.4}>
            <h1>
            <Clock format="hh:mm:ss" interval={1000} ticking={true} />
            </h1>
            </ReactFitText>
            </Grid>
    );
}

export default ClockCard;