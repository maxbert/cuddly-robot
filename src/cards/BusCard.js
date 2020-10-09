import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import dayjs from 'dayjs'
import { find } from 'lodash'
import './styles/SubwayCard.css';
function BusCard () {
    const [nextBus, setNextBus] = useState("");

    const saturdayX28Schedule = [
        "07:52",
        "08:51",
        "09:26",
        "09:56",
        "10:26",
        "10:56",
        "11:26",
        "12:00",
        "12:35",
        "13:20",
        "14:20",
        "15:21",
        "16:21",
        "17:05",
        "17:37",
        "18:07",
        "18:36",
        "19:06",
        "19:35",
        "20:05",
        "20:37",
        "21:22",
        "10:21"
    ]

    const sundayX28Schedule = [
        "08:50",
        "09:50",
        "10:50",
        "11:52",
        "11:42",
        "13:34",
        "14:09",
        "14:39",
        "15:09",
        "15:39",
        "16:10",
        "16:41",
        "17:11",
        "17:41",
        "18:11",
        "18:41",
        "19:10",
        "19:44",
        "20:23",
        "21:23"
    ]

    const weekdayX28Schedule = [
        "09:34",
        "10:34",
        "11:34",
        "12:30",
        "13:20",
        "14:05",
        "14:45",
        "15:15",
        "15:35",
        "15:50",
        "16:16",
        "16:36",
        "16:55",
        "17:11",
        "17:27",
        "17:46",
        "18:09",
        "18:39",
        "18:51",
        "19:05",
        "19:21",
        "19:40",
        "20:00",
        "20:22",
        "20:49",
        "21:18",
        "22:31",
        "23:46"
    ]

    const refresh = () => {
        console.log("refresehd")
        let  nextBusTime = "";
        switch(dayjs().day()){
            case 0:
                nextBusTime = find(sundayX28Schedule, time => dayjs().format("HH:mm") < time)
                break;
            case 1:
                nextBusTime = find(saturdayX28Schedule, time => dayjs().format("HH:mm") < time)
                break;
            default:
                nextBusTime = find(weekdayX28Schedule, time => dayjs().format("HH:mm") < time)
        }
        console.log("next bus time is ", nextBusTime)
        setNextBus(nextBusTime)
    }
    
    useEffect(refresh)



    //refresh every minute
    setInterval(() => {refresh()}, 60000)

    return ( 
            <div className="subwayTime">
               The next x28 is at: {nextBus}
            </div>
    );
}

export default BusCard;