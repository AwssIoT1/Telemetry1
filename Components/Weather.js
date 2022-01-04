import React, { useEffect, useState } from "react";
import ReactWeather from 'react-open-weather'
import useOpenWeather  from '../Providers/openweather/UseOpenWeather.js'
import Card from "./Card.js"
import '../css/App.css';
import Title from "./Title.js"
const Weather = () => {

    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);

    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       setLat(position.coords.latitude);
    //       setLong(position.coords.longitude);
    //     });

    //     console.log("Latitude is:", lat)
    //     console.log("Longitude is:", long)
    // }, [lat, long]);
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: 'a49678ea3f5b718445dc1f365156374b',
        lat: '12.9762',
        lon: '77.6033',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });
      console.log({data});
   return (
       <div>
      <div className='App'>
      <Title />
            <ReactWeather
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Banglore"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
            />
  
        </div>
      

     </div> 
        );
      
};

export default Weather;