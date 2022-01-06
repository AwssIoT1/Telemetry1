
 import { useState, useEffect } from 'react';
 import Pusher from 'pusher-js';

// Default

// export const SUCCESS = 'SUCCESS';
// export const FAILURE = 'FAILURE';

// // Initial state
// const initialState = {
//     data: null,
//     errorMessage: null,
//   };

  Pusher.logToConsole = true;
  const pusher = new Pusher(
    "768a2152b7c6fd195a2f", // Replace with 'key' from dashboard
    {
      cluster: "ap2", // Replace with 'cluster' from dashboard
      forceTLS: true,
    }
  );

  //---------------------------------------------------------
  const channel = pusher.subscribe("chData");
  const channel2 = pusher.subscribe("chData_1h10m"); 
   //---------------------------------------------------------
   
  
  const usePusher = () => {
     const [Power_MW, setPower_MW] = useState(() =>{return 0});
      const [Power_MVAR, setPower_MVAR] = useState(() =>{return 0});
    const [Frequency_Hz, setFrequency_Hz] = useState(() =>{return 0});
    const [PowerFactor, setPowerFactor] = useState(() =>{return 0});
    const [Time, setTime] = useState(() =>{return 0});
    const [Data_1h10m, setData_1h10m] = useState([0]);
    const [count, setcount] = useState([0]);
    //UseState
    
   
   //----------------------------------------------------------

  
    useEffect(() => {

      const getval = (data) =>{
       
        var vals = JSON.parse(data.payload)
        
        setPower_MW(vals.Power_MW)
        setPower_MVAR(vals.Power_MVAR)
        setFrequency_Hz(vals.Frequency_Hz)
        setPowerFactor(vals.PowerFactor)
        setTime(vals.Time)
       
    }
    channel.bind("Power",getval);  
    //-----------------------------------------
        const getval2 = (data) =>{
            
         var  vals2 = JSON.parse(data.payload)
                 console.log(vals2.val0, vals2.val1)
                setcount(vals2)
          }
          channel2.bind("Power",getval2);
        },[]);

         
    
    
    return  {Power_MW, Power_MVAR, Frequency_Hz, PowerFactor,Time,count} ;
  
    };
   
export default usePusher;