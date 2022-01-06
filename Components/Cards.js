import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Pusher from 'pusher-js';
import Card from "./Card.js"
import '../css/cards.css';
// import { Divider } from "semantic-ui-react";
import usePusher,{ Power_MW} from '../Providers/pusher/UsePusher.js';
// ------------------------------------
// Pusher.logToConsole = true;
// const pusher = new Pusher(
//   "768a2152b7c6fd195a2f", 
//   {
//     cluster: "ap2", 
//     forceTLS: true,
//   }
 
// );
// const channel = pusher.subscribe("chData"); 
// const channel2 = pusher.subscribe("chData_1h10m"); 
//-----------------------




const Cards = () => {
  const {Power_MW, Power_MVAR, Frequency_Hz, PowerFactor,Time,count} = usePusher();
  console.log({count})
  // const Power_MW = 6
  // const Power_MVAR = 6
  //   const Frequency_Hz = 7
  //   const PowerFactor = 9
  //   const Time = 10
  
    // const [Power_MW, setPower_MW] = useState(() =>{return 0});
    // const [Power_MVAR, setPower_MVAR] = useState(() =>{return 0});
    // const [Frequency_Hz, setFrequency_Hz] = useState(() =>{return 0});
    // const [PowerFactor, setPowerFactor] = useState(() =>{return 0});
    // const [Time, setTime] = useState(() =>{return 0});
    // const [Data_1h10m, setData_1h10m] = useState([]);
   
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
       
  
              //parse data
    // const getval = (data) =>{
    //   testdata = data
    //   var vals = JSON.parse(data.payload)
    //   setPower_MW(vals.Power_MW)
    //   setPower_MVAR(vals.Power_MVAR)
    //   setFrequency_Hz(vals.Frequency_Hz)
    //   setPowerFactor(vals.PowerFactor)
    //   setTime(vals.Time)
    // }
  
  
 
    //     const getval2 = (data) =>{
    //       var vals2 = JSON.parse(data.payload)
    //       console.log(vals2.Data_1h10m.val0.Frequency)
    //       }
    
      
      // setData_1h10m(vals2.Data_1h10m)
      // console.log(Data_1h10m)
    
  
    // channel.bind("Power",getval);       
    // channel2.bind("Power",getval2);      
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
        <h1>Last data received: (every 10min)</h1>
        <h1>{Dateformat}  {Timeformat}</h1>
        <h1></h1>
        </div>
    </div>
    
        );
        // pusher.disconnect();
   
};

export default Cards;