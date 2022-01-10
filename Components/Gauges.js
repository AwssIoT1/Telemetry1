import React from "react";
import PropTypes from 'prop-types';
import Pusher from 'pusher-js';
import Gauge from "./Gauge.js"
import '../css/Gauge.css';



const Gauges = ({Power_MW, Power_MVAR, Frequency_Hz, PowerFactor}) => {
    const num = 42



return (
    
    <div>
        <div  className='gauge-right'>
        <Gauge class='gauge'
                SignalName = 'ActivePower'
                SignalValue = {Power_MW}
                SignalUnit ="MW"
                Valuemin ={0 }
                ValueMax = {1000}
                valueDialClass = {"gauge-value"}
        />
          <Gauge className='gauge'
              SignalName = 'Power_MVAR'
              SignalValue = {Power_MVAR}
              SignalUnit ="MVAR"
              Valuemin ={0 }
              ValueMax = {1000}
              valueDialClass = {"gauge-value"}
        />
          <Gauge className='gauge'
              SignalName = 'Frequency_Hz'
              SignalValue = {Frequency_Hz}
              SignalUnit ="Hz"
              Valuemin ={0 }
              ValueMax = {50}
              precision = {20}
              valueDialClass = {"gauge-value"}
        />
           
          <Gauge className='gauge'
              SignalName = 'PowerFactor'
              SignalValue = {PowerFactor}
              SignalUnit =""
              Valuemin ={0 }
              ValueMax = {1}
              valueDialClass = {"gauge-value"}
        />
        </div>

    </div>
    
        );
        
        // pusher.disconnect();
   
};

export default Gauges;