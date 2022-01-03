import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import '../css/Card.css';
const Card = ({SignalName,SignalValue,SignalUnit}) => {

return (
    <div className='card'>
      <img  className="img" src="asset\images.jfif" alt="Avatar"/>
      <div className="container">
      
      <h4 className="Title"><b>{SignalName}</b></h4> 
      <p className="Value">{SignalValue} {SignalUnit}</p>  
      
      
    </div>
     </div>
        );

}

Card.propTypes = {
    SignalName: PropTypes.string.isRequired,
    //SignalValue: PropTypes.string,
    SignalUnit: PropTypes.string.isRequired,
    // SignalObject: PropTypes.object.isRequired
  };
export default Card;