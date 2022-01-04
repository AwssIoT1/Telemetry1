import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Pusher from 'pusher-js';
import Card from "./Card.js"
import '../css/cards.css';
import { Divider } from "semantic-ui-react";
//import usePusher, {data1} from '../Providers/pusher/UsePusher.js';
// ------------------------------------

const Cards = ({SignalName}) => {
    const sig1 = SignalName
    var data121;   
    const dd ="34"
   
    const [Power_MW, setPower_MW] = useState(() =>{return 0});
    const [Power_MVAR, setPower_MVAR] = useState(() =>{return 0});
    const [Frequency_Hz, setFrequency_Hz] = useState(() =>{return 0});
    const [PowerFactor, setPowerFactor] = useState(() =>{return 0});
    const [Time, setTime] = useState(() =>{return 0});
    var count = 0;
    var DateNow =    new Date();
    
    
    const start = new Date();
    const end = Date.parse(Time);
    var sec = (DateNow - end)/1000
    var Dateoptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',  };
    var Dateoptions2 = {month: 'short', day: 'numeric', };
    var Timeoptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var dt = new Date(Time);
    var Dateformat = dt.toLocaleString('en-IN',Dateoptions2);
    var Timeformat = dt.toLocaleString('en-IN',Timeoptions);
    const diff = end - start;
    const seconds = Math.floor(diff / 1000 % 60);

    
    var myDate = new Date(1000*Time);
    // --------------------------------------------------------------------------------
    Pusher.logToConsole = true;

    if (window.onload) then 
        count = count + 1;
        console.log(count)
        const pusher = new Pusher(
          "768a2152b7c6fd195a2f", 
          {
            cluster: "ap2", 
            forceTLS: true,
          }
         
        );

  
              //parse data
    const getval = (data) =>{
      var vals = JSON.parse(data.payload)
      setPower_MW(vals.Power_MW)
      setPower_MVAR(vals.Power_MVAR)
      setFrequency_Hz(vals.Frequency_Hz)
      setPowerFactor(vals.PowerFactor)
      setTime(vals.Time)
    }
  
        
        const channel = pusher.subscribe("chData");
     
                 //fetch data

              channel.bind("Power",getval); 
    // --------------------------------------------------------------------------------

return (
    
    <div >
        <div  className='CardRight'>
        <Card class='Card'
              SignalName = "Active Power"
              SignalValue = {Power_MW}
              SignalUnit="MW"
        />
          <Card className='Card'
              SignalName = "Reactive Power"
              SignalValue ={Power_MVAR}
              SignalUnit="MVAR"
        />
          <Card className='Card'
              SignalName = "Frequency"
              SignalValue ={Frequency_Hz}
              SignalUnit="Hz"
        />
           
          <Card className='Card'
              SignalName = "Power Factor"
              SignalValue ={PowerFactor}
              SignalUnit=""
        />
        </div>
        <div>
        <h1>Last data received: </h1>
        <h1>{Dateformat}  {Timeformat}</h1>
        <h1></h1>
        </div>
    </div>
    
        );
        // pusher.disconnect();
   
};

export default Cards;