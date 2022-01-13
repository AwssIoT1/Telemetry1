import React from "react";
import PropTypes from 'prop-types';
import Pusher from 'pusher-js';
import Gauge from "./Gauge.js"
import '../css/Gauge.css';

const {Signals} = require('../Constants/Signals');

const Gauges = ({Power_MW, Power_MVAR, Frequency_Hz, PowerFactor}) => {

return (
    
    <div>
        <div  className='gauge-right'>
        <Gauge class='gauge'
                SignalPar = {Signals.ActivePower}               
                SignalValue = {Power_MW}
                SignalUnit ={Signals.ActivePower.Unit}
                valueDialClass = {"gauge-value"}
                dialRadius = {40}
        />
          <Gauge className='gauge'
              SignalPar = {Signals.RactivePower}
              valueDialClass = {"gauge-value"}
              SignalValue = {Power_MVAR}
        />
          <Gauge className='gauge'
                 SignalPar = {Signals.Frequency}
                 valueDialClass = {"gauge-value"}
                 SignalValue = {Frequency_Hz}
        />
           
          <Gauge className='gauge'
              SignalPar = {Signals.PowerFactor}
              valueDialClass = {"gauge-value"}
              SignalValue = {PowerFactor}
              
        />
          <Gauge className='gauge'
              SignalPar = {Signals.Voltage}
              valueDialClass = {"gauge-value"}
              SignalValue = {PowerFactor}
        />
          <Gauge className='gauge'
              SignalPar = {Signals.Current}
              valueDialClass = {"gauge-value"}
              SignalValue = {PowerFactor}
        />
        </div>

    </div>
    
        );
   
};

export default Gauges;