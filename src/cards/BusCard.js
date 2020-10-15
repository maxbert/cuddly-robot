import React, {useState, useEffect} from 'react';
import dayjs from 'dayjs'
import { find } from 'lodash'
import './styles/BusCard.css';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReactFitText from 'react-fittext'

// async function callMtaAPI() {
//     const url = "http://bustime.mta.info/api/siri/stop-monitoring.json?key=895127ba-0b61-4abf-8c51-d7b71ef0590a&version=2&OperatorRef=MTA&MonitoringRef=404197"
//     xhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//           this.responseText;
//         }
//       };
//     xhttp.open("GET", url, true);
//     xhttp.send();

// }

dayjs.extend(relativeTime)

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
        "23:46",
        "23:59"
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
        setNextBus(nextBusTime)
    }
    
    useEffect(refresh)



    //refresh every minute
    setInterval(() => {refresh()}, 60000)

    const getTimeToNextBus = () => {
        const nextBusTimeObject = dayjs().startOf('day').add(nextBus.split(":")[0], 'hours').add(nextBus.split(":")[1], 'minutes')
        return dayjs().to(nextBusTimeObject)
    }

    return ( 
            <div className="busTime">
                <ReactFitText compressor={0.8}>
               <h1 className="busSentence">The next x28 will arrive {getTimeToNextBus()}</h1>
               </ReactFitText>
            </div>
    );
}

export default BusCard;