import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import '../css/Gauge.css';
import GaugeSVG from "./GaugeSVG.js"

const Gauge = ({SignalName, SignalValue, SignalUnit, Valuemin,ValueMax,precision,valueDialClass }) => {

return (
    <div className='Gauge'>
       
      <div className="container">
      
      <h3 ><b>{SignalName}</b></h3> 
      <div className='Gauge2'> 
         <GaugeSVG  
          value = {SignalValue}
          max = {ValueMax}
          showValue = {true}
          gaugeClass = {"gauge-container"}
          dialClass = {"gauge-dial"}
          valueDialClass = {valueDialClass}
          valueClass = {"gauge-value-text"}
          precision ={precision}
          />
          </div>
      <p className="ValueMin">{Valuemin} </p>
      <p className="ValueMax">{ValueMax} </p>
      <canvas width = "200" height = "200"></canvas>  
      <p className="SignalUnit">{SignalUnit}</p>  
      
      
      
          
        
    </div>
   
     </div>
        );

}

// Gauge.propTypes = {
//     SignalName: PropTypes.string.isRequired,
//     //SignalValue: PropTypes.string,
//     SignalUnit: PropTypes.string.isRequired,
//     // SignalObject: PropTypes.object.isRequired
//   };
export default Gauge;