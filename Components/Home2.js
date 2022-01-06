import React from "react";
import Cards from "./Cards.js"
import Title from "./Title.js"
import Chart2 from "./rechart.js"
import usePusher,{ Power_MW} from '../Providers/pusher/UsePusher.js';




const Home2 = () => {
    const {Power_MW, Power_MVAR, Frequency_Hz, PowerFactor,Time,Data_1h10m} = usePusher();
    //  const checlk =  JSON.parse(Data_1h10m)
    //  const time = checlk.val0.Frequency
  
 
//   console.log(Data_1h10m)


    return (
        <div>
            <Title />
            <Cards 
            Power_MW = {Power_MW}
            Power_MVAR = {Power_MVAR}
            Frequency_Hz ={Frequency_Hz}
            PowerFactor = {PowerFactor}
            Time = {Time}

             />
            <Chart2 
            data ={Data_1h10m} />
        </div>
    );
      
};
export default Home2;