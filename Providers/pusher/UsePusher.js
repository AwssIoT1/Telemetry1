
 import React, { Component } from 'react';
 import Pusher from 'pusher-js';

// Default

export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// Initial state
const initialState = {
    data: null,
    errorMessage: null,
  };

  Pusher.logToConsole = true;
  const pusher = new Pusher(
    "768a2152b7c6fd195a2f", // Replace with 'key' from dashboard
    {
      cluster: "ap2", // Replace with 'cluster' from dashboard
      forceTLS: true,
    }
  );
  //fetch data
  const channel = pusher.subscribe("chData");
  const usePusher = () => {

    channel.bind("Power", (data1) => 
    {
    
         console.log(data1)
      
        // return {data1}
    });
   
  
    };
   
export default usePusher;