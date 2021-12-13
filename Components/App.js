import React, { useEffect, useState } from "react";
import ReactWeather, { useOpenWeather } from 'react-open-weather'
import '../css/App.css';
const App = () => {

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
   return (
    <div className='App'>
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
        );
};

export default App;