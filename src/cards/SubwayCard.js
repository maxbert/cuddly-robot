import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './styles/SubwayCard.css';
function SubwayCard () {
    const [iframeKey, setIframeKey] = useState(0);
    const [hasSetMapStorage, setHasSetMapStorage] = useState(false);
    //refresh every ten minutes
    setInterval(() => {setIframeKey(iframeKey + 1)}, 600000)

    return ( 
            <div className="subwayTime">
            
            </div>
    );
}

export default SubwayCard;