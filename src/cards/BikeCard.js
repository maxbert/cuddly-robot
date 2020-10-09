import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './styles/BikeCard.css';
function BikeCard () {
    const [iframeKey, setIframeKey] = useState(0);
    const [hasSetMapStorage, setHasSetMapStorage] = useState(false);
    //refresh every ten minutes
    setInterval(() => {setIframeKey(iframeKey + 1)}, 600000)

    const setMapStorage = (key, value) => {
        setTimeout(() => {
        document.getElementById("bikeMap").srcdoc = 
        document.getElementById("bikeMap").srcdoc.slice(0, 85) + 
        "<script>localStorage.setItem(\"" + key + "\",\"" + value +  "\")</script>" + 
        document.getElementById("bikeMap").srcdoc.slice(
            85,
            document.getElementById("bikeMap").srcdoc.length
        )
        console.log('ran')
        }, 5000)
    }

    useEffect(()=> {
        setMapStorage("edMapStorage_latitude","40.725063622053")
        setMapStorage("edMapStorage_longitude","-73.98508664020494")
        setMapStorage("edMapStorage_zoom","15")
        setHasSetMapStorage(true)
    }, [hasSetMapStorage])

    
    return ( 
            <div className="bikeMap">
            <iframe
                is="x-frame-bypass"
                id="bikeMap"
                className="bikeMap"
                key={iframeKey}
                src="https://member.citibikenyc.com/map/"
                style={{height:'100%', width:'100%', border:'none'}}
            />
            </div>
    );
}

export default BikeCard;