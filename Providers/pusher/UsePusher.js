
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
         var val0 = vals2.val0
         var val1 = vals2.val1
         var val2 = vals2.val2
         var val3 = vals2.val3
         var val4 = vals2.val4
         var val5 = vals2.val5
         var Timeoptions = { hour: '2-digit', minute: '2-digit', second: '2-digit',  };
        const time0 = new Date(val0.Time)
        const Timeformat0 = time0.toLocaleString('en-IN',Timeoptions);
        
                const data1 = [
                  {
                    name:  val0.Time.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1"),
                    Freq: val0.Frequency,
                    PF: val0.PowerFactor,
                    Power_MW: val0.Power_MW,
                    Power_MVAR: val0.Power_MVAR
                    
                  },
                  {
                    name: val1.Time.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1"),
                    Freq: val1.Frequency,
                    PF: val1.PowerFactor,
                    Power_MW: val1.Power_MW,
                    Power_MVAR: val1.Power_MVAR
                  },
                  {
                    name: val2.Time.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1"),
                    Freq: val2.Frequency,
                    PF: val2.PowerFactor,
                    Power_MW: val2.Power_MW,
                    Power_MVAR: val2.Power_MVAR
                  },
                  {
                    name: val3.Time.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1"),
                    Freq: val3.Frequency,
                    PF: val3.PowerFactor,
                    Power_MW: val3.Power_MW,
                    Power_MVAR: val3.Power_MVAR
                  },
                  {
                    name: val4.Time.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1"),
                    Freq: val4.Frequency,
                    PF: val4.PowerFactor,
                    Power_MW: val4.Power_MW,
                    Power_MVAR: val4.Power_MVAR
                  },
                  {
                    name:  val5.Time.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1"),
                    Freq: val5.Frequency,
                    PF: val5.PowerFactor,
                    Power_MW: val5.Power_MW,
                    Power_MVAR: val5.Power_MVAR
                  }
                ];
                setData_1h10m(data1)
          }
          channel2.bind("Power",getval2);
        },[]);

         
    
    
    return  {Power_MW, Power_MVAR, Frequency_Hz, PowerFactor,Time,Data_1h10m} ;
  
    };
   
export default usePusher;