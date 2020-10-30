import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import './styles/BikeCard.css';
import ReactMapboxGl, {Feature, Layer, Marker, MapContext} from 'react-mapbox-gl';
import mapboxgl from 'mapbox-gl'
import { random } from 'lodash';
import styled, {css, keyframes} from 'styled-components'
function BikeCardV2 () {
    const [stations, setStations] = useState([])
    const [stationInfo, setStationInfo] = useState([])
    const [shouldFetch, setShouldFetch] = useState(true)
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1IjoibWF4YmVydCIsImEiOiJjaXI2eHF6bjMwMHIzZ2FtOXlsbzRuYWVpIn0.DQhYl-C662jhIKZZN-taXA",
      });

    useEffect(() => {
        fetch('https://gbfs.citibikenyc.com/gbfs/en/station_information.json')
            .then(response => response.json())
            .then(data => setStations(data.data.stations));
            }, [])

    useEffect(() => {
        const fetchStationInfo = () => {
            fetch('https://gbfs.citibikenyc.com/gbfs/en/station_status.json')
            .then(response => response.json())
            .then(data => setStationInfo(data.data.stations))
        }
        fetchStationInfo()
        const interval = setInterval(fetchStationInfo, 60000)
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        const refreshPage = () => {
            window.location.reload()
        }
        const interval = setInterval(refreshPage, 10800000)
        return () => clearInterval(interval);
    }, [])

    const colors = ["cfbae1","48cae4","0096c7","023e8a","03045e"]

    const HolllowBikeMarker =  styled.div`
            width:10px;
            height:10px;
            ${props => {
                var cssString = ''
                cssString += `border: ${props.num > 2 ? random(3,10) + 'px': '5px'} solid #${props.enum < 4 ? colors[props.enum % 4] : colors[4]};`
                cssString += `background-color: transparent;`
                cssString += `
                    width:${props.num * 1.5 + 10}px;
                    height:${props.num * 1.5+ 10}px;
                `
                if(random(0,1)){
                    cssString += `border-radius: 50%;`
                }
                cssString += `animation-delay: ${random(0,10)};`
                return css`${cssString}`
             }
            };
            ${props => {
                const stopAnimating = random(20, 80)
                const breathing = keyframes`
                    0% {
                        transform: scale(1);
                    }
                    ${stopAnimating / 2}% {
                        transform: scale(1.5);
                    }
                    ${stopAnimating}% {
                        transform: scale(1);
                    100% {
                        transform: scale(1);
                    }
                `
                return css`animation: ${breathing} ${random(1,10,true)+"s"} linear infinite;`
            }}
        `
    const BikeMarker =  styled.div`
        width:10px;
        height:10px;
        ${props => {
            var cssString = ''
            cssString += `background-color: #${props.enum < 4 ? colors[props.enum % 4] : colors[4]};`
            cssString += `
                width:${props.num * 1.5 + 10}px;
                height:${props.num * 1.5+ 10}px;
            `
            if(random(0,1)){
                cssString += `border-radius: 50%;`
            }
            cssString += `animation-delay: ${random(0,10)};`
            return css`${cssString}`
         }
        };
        ${props => {
            const stopAnimating = random(20, 80)
            const breathing = keyframes`
                0% {
                    transform: scale(1);
                }
                ${stopAnimating / 2}% {
                    transform: scale(1.5);
                }
                ${stopAnimating}% {
                    transform: scale(1);
                100% {
                    transform: scale(1);
                }
            `
            return css`animation: ${breathing} ${random(1,10,true)+"s"} linear infinite;`
        }}
    `
    const me = [-73.981530, 40.729280]

    return ( 
            <div id="map" className="bikeMap">
                
                 <Map
                style="mapbox://styles/maxbert/ckgbrx0yf02n81ap37uzl3pke/draft"
                containerStyle={{
                    height: '100%',
                    width: '100%'
                }}
                center={[-73.9820, 40.72878]}
                zoom={[15.5]}
                bearing={[29.1]}
                >
                {
                    stations.map((station, index) => {
                        if(station.lon < me[0] + 0.015 &&
                            station.lon > me[0] - 0.015 &&
                            station.lat <  me[1] + 0.015 &&
                            station.lat > me[1] - 0.015
                            ) {
                         console.log(station.num_docks_available)
                         return <Marker coordinates={[station.lon, station.lat]}>
                            {stationInfo[index]?.num_docks_available > 2 ? <BikeMarker 
                            id={station.station_id}
                            enum={stationInfo[index]?.num_ebikes_available}
                            num={stationInfo[index]?.num_bikes_available}
                            /> :
                            <HolllowBikeMarker 
                            id={station.station_id}
                            enum={stationInfo[index]?.num_ebikes_available}
                            num={stationInfo[index]?.num_bikes_available}
                            />
                            }
                        </Marker>
                            }
                    }
                    )
                }
                </Map>
            </div>
    );
}

export default BikeCardV2;