import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import '../css/Gauge.css';
import GaugeSVG from "./GaugeSVG.js"

const Gauge = ({SignalPar, SignalValue, valueDialClass,dialRadius,precision }) => {

return (
    <div className='Gauge'>
       
      <div className="container">
      
      <h3 ><b>{SignalPar.Name}</b></h3> 
      <div className='Gauge2'> 
         <GaugeSVG  
          value = {SignalValue}
          min = {SignalPar.Min}
          max = {SignalPar.Max}
          showValue = {true}
          gaugeClass = {"gauge-container"}
          dialClass = {"gauge-dial"}
          valueDialClass = {valueDialClass}
          valueClass = {"gauge-value-text"}
          precision ={precision}
          dialRadius = {dialRadius}
          />
          </div>
      <p className="ValueMin">{SignalPar.Min} </p>
      <p className="ValueMax">{SignalPar.Max} </p>
      <canvas width = "200" height = "200"></canvas>  
      <p className="SignalUnit">{SignalPar.Unit}</p>  
      
      
      
          
        
    </div>
   
     </div>
        );

}

Gauge.defaultProps = {
  dialRadius: "40"
}

// Gauge.propTypes = {
//     SignalName: PropTypes.string.isRequired,
//     //SignalValue: PropTypes.string,
//     SignalUnit: PropTypes.string.isRequired,
//     // SignalObject: PropTypes.object.isRequired
//   };
export default Gauge;